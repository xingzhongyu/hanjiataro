import Taro from '@tarojs/taro'
import {connect} from '@tarojs/redux'


import Stainput from '../../components/stainput/stainput'
import Stainforlist from '../../components/stainforlist/stainforlist'
import requserlist from '../../ajax/ajax'


 
export default class Index extends Taro.Component{
   
    state={
        userlist:[],
        keyword:'',
        sort:''
    }
   search=(keyword,sort)=>{
        this.setState({keyword,sort})
        const url=`https://api.github.com/search/users?q=${keyword}&sort=${sort}`
        const res=requserlist(url)
        console.log(url)
        res.then(data=>{
            const userlist=data.data.items
            this.setState({userlist})
        })
    }
  render(){
    const {userlist}=this.state
      return(
          <div>
              <Stainput search={this.search}/>
              <Stainforlist userlist={userlist}/>
          </div>
      )
  }

}
