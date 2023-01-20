export const navLinkOptions: {
  text: string;
  paths: string[];
  toPath: string;
  id: string;
}[] = [
  {
    text: 'Log In',
    paths: ['/'],
    toPath: 'login',
    id: 'logIn',
  },
  {
    text: 'Sign up',
    paths: ['/'],
    toPath: 'signup',
    id: 'signUp',
  },
  {
    text: 'Sign out',
    paths: ['/boards', '/edit-profile'],
    toPath: '/',
    id: 'signOut',
  },

  {
    text: 'Edit profile',
    paths: ['/boards'],
    toPath: '/edit-profile',
    id: 'editProfile',
  },
];
