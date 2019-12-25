import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {

            setPosts(state, posts) {
                debugger;
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxtintegration.firebaseio.com/posts.json')
                    .then(res => {
                        const postsArray = [];
                        for (const key in res.data) {
                            postsArray.push({ ...res.data[key], id: key });
                        }
                        vuexContext.commit('setPosts', postsArray);
                    })
                    .catch(e => context.erro(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore