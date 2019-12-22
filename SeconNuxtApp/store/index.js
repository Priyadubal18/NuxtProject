import Vuex from 'vuex'

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
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: "1",
                                title: "First Post",
                                previewText: "This is our first post!",
                                thumbnail:
                                    "https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
                            },
                            {
                                id: "2",
                                title: "Second Post",
                                previewText: "This is our second post!",
                                thumbnail:
                                    "https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
                            },
                            {
                                id: "3",
                                title: "Third Post",
                                previewText: "This is our third post!",
                                thumbnail:
                                    "https://annenberg.usc.edu/sites/default/files/styles/news_featured_hero/public/womenintech.jpg?itok=GtitJQP3&timestamp=1567532369"
                            }
                        ]
                        );
                        resolve();
                    }, 1500);
                });
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