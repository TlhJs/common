const list = [
    {
        lName: '普通用户',
        lCode: 'user'
    },
    {
        lName: '管理员',
        lCode: 'admin'
    },
    {
        lName: '超级管理员',
        lCode: 'superAdmin'
    }
];

export default ({ arr = [], arr2 }) => {
    const c = list.map(el => el.lCode); // 遍历出定义的list的lCode码
    // console.log(arr, arr2);
    const pos = arr2.map(el => c.indexOf(el)); // 接口返回权限码在c中的位置
    const posData = pos.filter(el => el > -1); // 过滤确保权限码在c中存在
    // console.log(posData);// [1,2]
    // 过滤确保显示模块(如arr=[0],则过滤之后的length为0,返回false故不显示用户权限)
    const isShow = posData.filter(el => arr.indexOf(el) > -1).length > 0;
    // console.log(isShow);
    // console.log(posData.filter(el => arr.indexOf(el) > -1)) 输出为[1,2] [] [1] [2]
    return isShow;
};
