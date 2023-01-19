export const navLinkOptions: {
  text: string;
  paths: string[];
  toPath: string;
  id: string;
}[] = [
  {
    text: 'Log In',
    paths: ['/'],
    toPath: 'auth',
    id: 'logIn',
  },
  {
    text: 'Sign up',
    paths: ['/'],
    toPath: 'auth',
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
