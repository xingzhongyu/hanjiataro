import Taro from '@tarojs/taro'
import { AtPagination, AtList, AtListItem } from 'taro-ui'
import PropTypes from 'prop-types'

import './stainforlists.less'


export default class Stainforlist extends Taro.Component {
    static propTypes={
        userlist:PropTypes.array.isRequired
    }
    
    handleClick(url){
        console.log(url)
    }
    render() {
        const {userlist}=this.props
        return (
            <div>
               <AtList>
                   {userlist?userlist.map(user=>{
                       return(
                           <AtListItem
                           title={user.login}
                           thumb={user.avatar_url}
                           onClick={this.handleClick.bind(this,user.url)}
                           />
                       )
                   }):null}
               </AtList>
            </div>
        )
    }
}