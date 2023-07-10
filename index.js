import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect } from 'react';
import { TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { extend } from '@syncfusion/ej2-base';
import { updateSampleSection } from './sample-base';
import * as dataSource from './datasource.json';
/**
 * schedule timeline resource grouping sample
 */
const TimelineGrouping = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const data = extend([], dataSource.resourceData.concat(dataSource.timelineResourceData), null, true);
    const workDays = [0, 1, 2, 3, 4, 5];
    const projectData = [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
    ];
    const categoryData = [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Michael', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
    ];
    return (<div className='schedule-control-section'>
            <div className='col-lg-12 control-section'>
                <div className='control-wrapper'>
                    <ScheduleComponent cssClass='timeline-resource-grouping' width='100%' height='650px' selectedDate={new Date(2023, 0, 4)} currentView='TimelineWeek' workDays={workDays} eventSettings={{ dataSource: data }} group={{ resources: ['Projects', 'Categories'] }}>
                        <ResourcesDirective>
                            <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false} dataSource={projectData} textField='text' idField='id' colorField='color'/>
                            <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true} dataSource={categoryData} textField='text' idField='id' groupIDField='groupId' colorField='color'/>
                        </ResourcesDirective>
                        <ViewsDirective>
                            <ViewDirective option='TimelineDay'/>
                            <ViewDirective option='TimelineWeek'/>
                            <ViewDirective option='TimelineWorkWeek'/>
                            <ViewDirective option='TimelineMonth'/>
                            <ViewDirective option='Agenda'/>
                        </ViewsDirective>
                        <Inject services={[TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop]}/>
                    </ScheduleComponent>
                </div>
            </div>
        </div>);
};
export default TimelineGrouping;

const root = createRoot(document.getElementById('sample'));
root.render(<TimelineGrouping />);