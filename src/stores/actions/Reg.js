/* 
* @Author: Qi JianWei
* @Date:   2017-06-23 11:34:24
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-29 11:42:44
*/
import {API} from '../API';

import QS from 'qs';
export default{
    submitReg(store,{$http,data}){
       return  $http({
            method:'post',
            url:API.admin.users.reg,
            data:QS.stringify(data)
        });
    },
    submitLogin(store,{$http,data}){
      return $http({
            method:'post',
            url:API.admin.users.login,
            data:QS.stringify(data)
        });
    },
    Logout(store,{$http}){

        return $http({
            method:'get',
            url:API.admin.users.logout
        });
    },
    uploadAvatar(store,{$http,data}){
         let fm=new FormData();
         fm.append('avatar',data.avatar);
        console.log(data);
        return $http({
            method:'post',
            url:API.admin.users.uploadavatar,
            data:fm
        });
    },
    sendhead(store,{$http,data}){
        return user.sendhead($http,data)
    },
    /*上传修改后的生日信息*/
    uploadBirthday(store,{$http,data}){
       // console.log(111);
        $http({
           method:'post',
           headers: {'content-type': 'application/x-www-form-urlencoded'},
           url:API.admin.users.details.edit,
           data:QS.stringify(data)   
        }).then((response)=>{
            // console.log(JSON.parse(response.data.birthday));
            if(!response.data.code){
               store.commit('update_EditUserInfo', response.data);
            }
        });

    },
    /*获取修改后的信息*/
    get_EditUserInfo(store,{$http}){
          $http({
            method:'get',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            url:API.admin.users.details.profile
          }).then((response)=>{
             store.commit('update_EditUserInfo', response.data);
          });
    }
}