import Taro from '@tarojs/taro'
export default function requserlist(url){
    return Taro.request({
        url:url,
        method:'GET',
        success:function(res){
            console.log(res.data)
        }
    })
}