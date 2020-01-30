import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'
import {View,Text,Picker} from '@tarojs/components'
import PropTypes from 'prop-types'
export default class Stainput extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      selector: ['followers','repositories','joined'],
      selectorChecked: 'followers',
      value: ''
    }
  }
  static propTypes={
    search:PropTypes.func.isRequired
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onRangeChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  onActionClick=()=>{
    const {value,selectorChecked}=this.state
    this.props.search(value,selectorChecked)
  }
  render () {
    return (
      <div>
      <AtSearchBar
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
       <View className='page-section'>
         <Text>选择用户的排列顺序</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onRangeChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
    </div>
    )
  }
}