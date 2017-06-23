import * as React from 'react';
import request from '../../utils/request';
import { Tabs } from 'antd-mobile';
import './styles/index.sass';

export interface TimeLineProps {
  showInfo: any
}

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}


export const TimeLine = (props: TimeLineProps) => {

  const { showInfo } = props;
  let tabs = [];
  for (let key in showInfo) {
    tabs.push(
      <TabPane tab={key} key={tabs.length + 1}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          { key }
        </div>
      </TabPane>
    )
  }

  return (
    <div>
      <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        { tabs }
      </Tabs>
    </div>
  );
  
}
