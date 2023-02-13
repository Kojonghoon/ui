import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };

  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic
export default AuthLogic;

//크롬에서 서비스 사용시 로그인 정보가 수정될 때 콜백되는 코드임
//상태가 바뀔 때마다 자동으로 호출됨
//절대 개발자가 호출하는 함수가 아님
export const onAuthChange = (auth) => {
  return new Promise((resolve) => {
    auth.onAuthChange((user) => {
      resolve(user);
    });
  });
};

export const loginGoogle = (auth, googleProvider)=> { //로그인함수
  return new Promise((resolve, reject)=>{
    signInWithPopup(auth,googleProvider).then(
      (result)=>{ //result에는 구글 서버에서 전달해준 사용자 이름
        const user = result.user
        console.log(user);  //json형식
        resolve(user)
      }).cactch(e=>reject(e))
  })
}//end of loginGoogle
  // console.log("providerName : " + providerName);
  const authProvider = this.getProvider(providerName); //구글인가 깃헙인가 문자열 정보 가져옴
  // console.log("authProvider : " + authProvider);
  // console.log("this.firebaseAuth : " + this.firebaseAuth);
  //return signInWithPopup(this.firebaseAuth, authProvider);
  return signInWithPopup(this.firebaseAuth, authProvider);


export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch((e) => reject(alert(e + " : 로그아웃 에러입니다.")));
    resolve();
  });
};
