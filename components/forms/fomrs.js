import FieldFill from './FieldFill'
export const signin = {
   id: 1,
   title: 'Sign in to Give Star',
   subtitle: '',
   button: 'Sign in',
   buttonIcon: '',
   method: 'post',
   next: {
      id: null,
      title: '',
   },
   previous: {
      id: null,
      title: '',
   },
   help: {
      id: null,
      title: '',
   },
   fields: [
      {
         id: 1,
         name: 'username',
         type: 'text',
         component: FieldFill,
         placeholder: 'User Name',
         errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
         label: 'username',
         defaultValue: '',
         pattern: '^[A-Za-z0-9]{3,16}$',
         required: 'true',
      },
      {
         id: 2,
         name: 'email',
         type: 'email',
         placeholder: 'Email',
         errorMessage: 'It should be a valid email address!',
         label: 'Email',
         component: FieldFill,
         defaultValue: '',
         required: true,
         pattern: '^[A-Za-z0-9]{3,16}$',
      },
      {
         id: 3,
         name: 'email',
         type: 'email',
         placeholder: 'Email',
         errorMessage: 'It should be a valid email address!',
         label: 'Email',
         component: FieldFill,
         defaultValue: '',
         required: true,
         pattern: '^[A-Za-z0-9]{3,16}$',
      },
   ],
}

export const signup = {}
export const restorePassword = {}
