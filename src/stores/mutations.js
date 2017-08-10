/* 
* @Author: Qi JianWei
* @Date:   2017-06-23 11:27:11
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-28 23:18:06
*/

export default{
   updateTabBarIndex(state, data) {
        state.tabBarIndex = data;
    },
    updateUserInfo(state,data){
        state.userInfo=data;
    },
    updataTitle(state,data){
        state.title = data;
    },
    update_EditUserInfo(state,data){
        state.editUserInfo=data;
    }

}