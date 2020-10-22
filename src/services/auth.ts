import api from "./api";

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export async function signIn() {
  let user = {}
  await api.post('/users/login', {
    email: 'oto@gmail.com',
    password: '123123123'
  }).then((res) =>{
    user = res.data
  })
  console.log(user)
  return <Response>(user)
}