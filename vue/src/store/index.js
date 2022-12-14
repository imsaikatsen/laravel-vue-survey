import { createStore } from 'vuex'
import axiosClient from '../axios';

const tmpSurveys = [
  {
    id: 1,
    title: "TheCodeholic YouTube channel content",
    slug: "thecodeholic-youtube-channel-content",
    status: "draft",
    image: 'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png',
    description: "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.",
    created_at: "2022-09-08 18:00:00",
    updated_at: "2022-09-08 18:00:00",
    expire_date: "2022-12-31 18:00:00",
    questions: [
      {
        id: 1,
        type: 'select',
        question: 'Select your country?',
        description: null,
        data: {
          multiple: false,
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Georgia'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Germany'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'India'},
            {uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc', text: 'United Kingdom'},
          ]
        },
      },
      {
        id: 2,
        type: 'checkbox',
        question: 'Which language videos do you want to see on my channel?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'JavaScript'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'PHP'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'HTML + CSS'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'All of the above'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Everything Zura thinks will be good'},
          ]
        },
      },
      {
        id: 3,
        type: 'checkbox',
        question: 'Which PHP framework videos do you want to see on my channel?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Laravel'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Yii2'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Codeigniter'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Symfony'},
          ]
        },
      },
      {
        id: 4,
        type: 'radio',
        question: 'Which Laravel Framework do you love most?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: '31132230-29e0-4857-84ed-417542c7c8dd', text: 'Laravel 5'},
            {uuid: '0ab85f86-15ee-4ec0-ba42-793daf243a5d', text: 'Laravel 6'},
            {uuid: '748fd679-d983-4d73-8d7b-7bb4abd22254', text: 'Laravel 7'},
            {uuid: 'f1864724-1009-4bed-94a1-3cfe93dfb82a', text: 'Laravel 8'},
          ]
        },
      },
      {
        id: 5,
        type: 'checkbox',
        question: 'What type of projects do you want to see on my channel built with Laravel?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
        data: {
          options: [
            {uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'REST API'},
            {uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'E-commerce'},
            {uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Real Estate'},
            {uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'All of the above'},
          ]
        },
      },
      {
        id: 6,
        type: 'text',
        question: 'What do you think about TheCodeholic channel?',
        description: 'Write your honest opinion. Everything is anonymous.',
        data: {}
      },
      {
        id: 7,
        type: 'textarea',
        question: 'What do you think about TheCodeholic channel?',
        description: 'Write your honest opinion. Everything is anonymous.',
        data: {}
      },
    ],
  },
  {
    id: 2,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "draft",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
    description: `Laravel is a web application framework with expressive, elegant syntax. We???ve already laid the foundation ??? freeing you to create without sweating the small things.`,
    created_at: "2022-09-08 18:00:00",
    updated_at: "2022-09-08 18:00:00",
    expire_date: "2022-12-31 18:00:00",
    questions:[]
  },
  {
    id: 3,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "draft",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
    description: `Laravel is a web application framework with expressive, elegant syntax. We???ve already laid the foundation ??? freeing you to create without sweating the small things.`,
    created_at: "2022-09-08 18:00:00",
    updated_at: "2022-09-08 18:00:00",
    expire_date: "2022-12-31 18:00:00",
    questions:[]
  },
  {
    id: 4,
    title: "Laravel 8",
    slug: "laravel-8",
    status: "draft",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
    description: `Laravel is a web application framework with expressive, elegant syntax. We???ve already laid the foundation ??? freeing you to create without sweating the small things.`,
    created_at: "2022-09-08 18:00:00",
    updated_at: "2022-09-08 18:00:00",
    expire_date: "2022-12-31 18:00:00",
    questions:[]
  },
]

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        surveys:[...tmpSurveys],
    },
    getters: {},
    actions: {

      saveSurvey({ commit },  survey){
        delete survey.image_url;

        let response;
        if(survey.id){
          response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("UpdateSurvey",res.data)
          })
        }else{
          response = axiosClient.post("/survey", survey).then((res) => {
            commit("saveSurvey", res.data);
            return res;
          })
        }
        return response;
      },
        register({commit}, user) {
            return axiosClient.post('/register', user)
              .then((data) => {
                commit('setUser', data.user);
                commit('setToken', data.token)
                return data;
              })
          },
          login({commit}, user) {
            return axiosClient.post('/login', user)
              .then(({data}) => {
                commit('setUser', data.user);
                commit('setToken', data.token)
                return data;
              })
          },

          logout({ commit }){
            return axiosClient.post('/logout')
            .then(({response}) => {
              commit('logout');
              return response;
            })
          }
    },
    mutations: {
        saveSurvey: (state, survey) => {
          state.surveys = [...state.surveys, survey.data];
        },
        updateSurvey: (state, survey) => {
          state.surveys = state.surveys.map((s) => {
            if(s.id == survey.data.id) {
              return survey.data;
            }
            return s;
          });
        },
        logout: state => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, user) => {
            state.user.data = user;
          },
          setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
          },
    },
    modules: {}

})

export default store;