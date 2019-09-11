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
    const c = list.map(el => el.lCode);
    // console.log(arr, arr2);
    const pos = arr2.map(el => c.indexOf(el));
    const posData = pos.filter(el => el > -1); // 接口返回权限
    // console.log(posData);// [1,2]
    const isShow = posData.filter(el => arr.indexOf(el) > -1).length > 0;
    // console.log(isShow);
    return isShow;
};
