import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTimeline from '../../../components/timeline/index'
import AtTimelineItem from '../../../components/timeline/item'

import './index.scss'

export default class TimelinePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Timeline Page'
  }

  render () {
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>Timeline 时间轴</View>
        </View>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__content'>
              <View className='example'>
                <AtTimeline pending>
                  <AtTimelineItem icon='accessory'>刷牙洗脸</AtTimelineItem>
                  <AtTimelineItem icon='accessory' color='green'>吃早餐</AtTimelineItem>
                  <AtTimelineItem icon='accessory' color='red'>上班</AtTimelineItem>
                  <AtTimelineItem color='yellow'>睡觉</AtTimelineItem>
                </AtTimeline>
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  }
}
