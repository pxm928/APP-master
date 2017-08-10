/* 
* @Author: Qi JianWei
* @Date:   2017-06-27 07:00:29
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-27 07:08:49
*/
import {API} from '../API';
import QS from 'qs';
export default{
    submitReg($http,data){
       return  $http({
            method:'post',
            url:API.admin.users.reg,
            data:QS.stringify(data)
        });
    },
    submitLogin($http,data){
      return $http({
            method:'post',
            url:API.admin.users.login,
            data:QS.stringify(data)
        });
    },
    Logout($http){

        return $http({
            method:'get',
            url:API.admin.users.logout
        });
    }
}