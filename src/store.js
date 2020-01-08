// Dependencies
import createStore from 'unistore'

import { api } from './../src/lib/api'

// Exports
export const store = createStore({
  token: null,

  response: false,

  // Temp fake users
  connectedPersons: [
    {
      id: 12,
      name: 'James',
      age: 37,
      location: 'Switzerland',
      quote:
        'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'
    },
    {
      id: 13,
      name: 'Elizabeth',
      age: 17,
      location: 'France'
    },
    {
      id: 14,
      name: 'Mario',
      age: 33,
      location: 'Belgium',
      quote:
        'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'
    },
    {
      id: 15,
      name: 'Matt',
      age: 34,
      location: 'Germany'
    },
    {
      id: 16,
      name: 'Frank',
      age: 19,
      location: 'United States'
    },
    {
      id: 17,
      name: 'Liam',
      age: 51,
      location: 'United States',
      quote:
        'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'
    },
    {
      id: 18,
      name: 'Maximilian',
      age: 22,
      location: 'Germany',
      quote:
        'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'
    },
    {
      id: 19,
      name: 'Julie',
      age: 16,
      location: 'France'
    },
    {
      id: 20,
      name: 'Marion',
      age: 48,
      location: 'France'
    },
    {
      id: 22,
      name: 'Elizabeth',
      age: 17,
      location: 'France',
      quote:
        'The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.'
    },
    {
      id: 23,
      name: 'Maria',
      age: 344,
      location: 'Italy'
    },
    {
      id: 24,
      name: 'Matthea',
      age: 27,
      location: 'Germany'
    }
  ],
  // existing convos for connected person
  conversations: [
    {
      id: 12,
      name: 'James',
      age: 37,
      location: 'Switzerland',
      messages: [
        {
          id: 1,
          time: new Date().toDateString(),
          content: 'Hello <3'
        },
        {
          id: 2,
          time: new Date().toDateString(),
          content: 'How are you ?'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        },
        {
          id: 4,
          time: new Date().toDateString(),
          content: 'And this is a fake conversation.'
        }
      ]
    },
    {
      id: 13,
      name: 'Elizabeth',
      age: 17,
      location: 'France',
      messages: [
        {
          id: 1,
          time: new Date().toDateString(),
          content: 'Hello I am Elizabeth'
        },
        {
          id: 2,
          time: new Date().toDateString(),
          content: 'How are you :) ?'
        }
      ]
    },
    {
      id: 15,
      name: 'Charlotte',
      age: 28,
      location: 'Germany',
      messages: [
        {
          id: 1,
          time: new Date().toDateString(),
          content: 'Hi there Charlotte here'
        },
        {
          id: 2,
          time: new Date().toDateString(),
          content: 'Do you speak English ?'
        }
      ]
    }
  ],

  // Amount unread messages
  newMessages: 3,

  // Connected user
  user: null,

  // List of users
  users: [],

  // Allows to render component about the email verification after registering
  registered: false,

  count: 0,

  // Test default avatar
  avatar: null
})

export const actions = store => ({
  async getUsers() {
    return { users: await api('/users') }
  },
  setResponse: async (_, response) => ({ response }),
  setRegister: async (_, register) => ({ register }),
  setUser: async (_, user) => ({ user }),
  setAvatar: async (_, avatar) => ({ avatar }),
  setRegistered: async (_, registered) => ({ registered })
})
