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
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                debugger;
                const postIndex = state.loadedPosts.findIndex(
                    post => {
                        debugger
                        return post.id === editedPost.id
                    }
                );
                state.loadedPosts[postIndex] = editedPost;
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
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                }
                return axios
                    .post("https://nuxtintegration.firebaseio.com/posts.json", createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', { ...createdPost, id: result.data.name });
                    })
                    .catch(e => console.log(e));
            },
            editPost(vuexContext, editedPost) {
                debugger;
                return axios
                    .put(
                        `https://nuxtintegration.firebaseio.com/posts/${editedPost.id}.json`,
                        editedPost
                    )
                    .then(result => {
                        debugger;
                        vuexContext.commit('editPost', editedPost);
                    })
                    .catch(e => console.log(e));
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