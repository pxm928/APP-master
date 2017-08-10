/* 
* @Author: Qi JianWei
* @Date:   2017-06-23 11:15:29
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-28 11:52:43
*/

/* 
* @Author: Qi JianWei
* @Date:   2017-06-21 13:40:33
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-22 16:25:04
*/

const H='http://localhost:8080/';
//常量命名不能冲突，所以不能export const H
export const HOST=H;
export const API={
    admin:{
        users:{
           reg:H+'api/user/reg',
           login:H+'api/user/login',
           uploadavatar:H+'api/user/avatar/upload',  //上传头像接口
           logout:H+'api/user/logout' ,
           avatar:H+'api/user/avatar',  //获取当前用户头像接口
           details:{
              edit:H+'api/user/profile/edit',
              profile:H+'api/user/profile'
           }   
        }
    }
}