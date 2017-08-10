/* 
* @Author: Qi JianWei
* @Date:   2017-06-23 11:26:37
* @Last Modified by:   Qi JianWei
* @Last Modified time: 2017-06-28 23:20:26
*/

export default{
    tabBarIndex(state) {
        return state.tabBarIndex;
    },
    userInfo(state){
        return {
            _id: state.userInfo._id,
            username: state.userInfo.username,
            avatar: state.userInfo.avatar || 'public/uploads/user/steven-1498537962086.png'
        };
    },
    gettitle(state){
        return state.title;
    },
    EditUserInfo(state){
        return state.editUserInfo;
    }
}