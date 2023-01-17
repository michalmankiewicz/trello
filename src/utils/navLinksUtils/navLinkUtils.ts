export const navLinkOptions: {
  text: string;
  paths: string[];
  toPath: string;
  camelCase: string;
}[] = [
  {
    text: 'Log In',
    paths: ['/'],
    toPath: 'auth',
    camelCase: 'logIn',
  },
  {
    text: 'Sign up',
    paths: ['/'],
    toPath: 'auth',
    camelCase: 'signUp',
  },
  {
    text: 'Sign out',
    paths: ['/boards', '/edit-profile'],
    toPath: '/',
    camelCase: 'signOut',
  },

  {
    text: 'Edit profile',
    paths: ['/boards'],
    toPath: '/edit-profile',
    camelCase: 'editProfile',
  },
];
