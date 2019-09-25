import {Component, ViewEncapsulation, Inject, ViewChild, Input, OnChanges} from '@angular/core';
import { extend, closest, remove, addClass } from '@syncfusion/ej2-base';
import {
  EventSettingsModel, View, GroupModel, TimelineViewsService, TimelineMonthService,
  ResizeService, WorkHoursModel, DragAndDropService, ResourceDetails, ScheduleComponent, ActionEventArgs, CellClickEventArgs
} from '@syncfusion/ej2-angular-schedule';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import {Entrainements} from '../../domaines/entrainements';

export let hospitalData: any[] = [
  {
    Id: 10,
    Name: 'David',
    StartTime: new Date(2018, 7, 1, 9, 0),
    EndTime: new Date(2018, 7, 1, 10, 0),
    Description: 'Health Checkup',
    DepartmentID: 1,
    ConsultantID: 1,
    DepartmentName: 'GENERAL'
  }, {
    Id: 11,
    Name: 'John',
    StartTime: new Date(2018, 7, 1, 10, 30),
    EndTime: new Date(2018, 7, 1, 11, 30),
    Description: 'Tooth Erosion',
    DepartmentID: 2,
    ConsultantID: 2,
    DepartmentName: 'DENTAL'
  }, {
    Id: 12,
    Name: 'Peter',
    StartTime: new Date(2018, 7, 1, 12, 0),
    EndTime: new Date(2018, 7, 1, 13, 0),
    Description: 'Eye and Spectacles Checkup',
    DepartmentID: 1,
    ConsultantID: 3,
    DepartmentName: 'GENERAL'
  }, {
    Id: 13,
    Name: 'Starc',
    StartTime: new Date(2018, 7, 1, 14, 0),
    EndTime: new Date(2018, 7, 1, 15, 0),
    Description: 'Toothaches',
    DepartmentID: 2,
    ConsultantID: 4,
    DepartmentName: 'DENTAL'
  }, {
    Id: 14,
    Name: 'James',
    StartTime: new Date(2018, 7, 1, 10, 0),
    EndTime: new Date(2018, 7, 1, 11, 0),
    Description: 'Surgery Appointment',
    DepartmentID: 1,
    ConsultantID: 5,
    DepartmentName: 'GENERAL'
  }, {
    Id: 15,
    Name: 'Jercy',
    StartTime: new Date(2018, 7, 1, 9, 30),
    EndTime: new Date(2018, 7, 1, 10, 30),
    Description: 'Tooth Sensitivity',
    DepartmentID: 2,
    ConsultantID: 6,
    DepartmentName: 'DENTAL'
  }, {
    Id: 16,
    Name: 'Albert',
    StartTime: new Date(2018, 7, 2, 10, 0),
    EndTime: new Date(2018, 7, 2, 11, 30),
    Description: 'Skin care treatment',
    DepartmentID: 1,
    ConsultantID: 7,
    DepartmentName: 'GENERAL'
  }, {
    Id: 17,
    Name: 'Louis',
    StartTime: new Date(2018, 7, 2, 12, 30),
    EndTime: new Date(2018, 7, 2, 13, 45),
    Description: 'General Checkup',
    DepartmentID: 1,
    ConsultantID: 9,
    DepartmentName: 'GENERAL'
  }, {
    Id: 18,
    Name: 'Williams',
    StartTime: new Date(2018, 7, 2, 12, 0),
    EndTime: new Date(2018, 7, 2, 14, 0),
    Description: 'Mouth Sores',
    DepartmentID: 2,
    ConsultantID: 10,
    DepartmentName: 'DENTAL'
  },
  {
    Id: 19,
    Name: 'David',
    StartTime: new Date(2018, 7, 2, 16, 30),
    EndTime: new Date(2018, 7, 2, 18, 15),
    Description: 'Eye checkup and Treatment',
    DepartmentID: 1,
    ConsultantID: 1,
    DepartmentName: 'GENERAL'
  }, {
    Id: 20,
    Name: 'John',
    StartTime: new Date(2018, 7, 2, 19, 30),
    EndTime: new Date(2018, 7, 2, 21, 45),
    Description: 'Toothaches',
    DepartmentID: 2,
    ConsultantID: 2,
    DepartmentName: 'DENTAL'
  }, {
    Id: 21,
    Name: 'Peter',
    StartTime: new Date(2018, 7, 3, 17, 30),
    EndTime: new Date(2018, 7, 3, 19, 30),
    Description: 'Surgery Treatment',
    DepartmentID: 1,
    ConsultantID: 3,
    DepartmentName: 'GENERAL'
  }, {
    Id: 22,
    Name: 'Starc',
    StartTime: new Date(2018, 7, 4, 18, 30),
    EndTime: new Date(2018, 7, 4, 21, 30),
    Description: 'Tooth Decay',
    DepartmentID: 2,
    ConsultantID: 4,
    DepartmentName: 'DENTAL'
  }, {
    Id: 23,
    Name: 'James',
    StartTime: new Date(2018, 7, 3, 19, 0),
    EndTime: new Date(2018, 7, 3, 21, 0),
    Description: 'General Checkup',
    DepartmentID: 1,
    ConsultantID: 5,
    DepartmentName: 'GENERAL'
  }, {
    Id: 24,
    Name: 'Jercy',
    StartTime: new Date(2018, 7, 4, 20, 0),
    EndTime: new Date(2018, 7, 4, 22, 0),
    Description: 'Tooth Erosion',
    DepartmentID: 2,
    ConsultantID: 6,
    DepartmentName: 'DENTAL'
  }];

export let waitingList: { [key: string]: any }[] = [
  {
    Id: 1,
    Name: 'Steven',
    StartTime: new Date(2018, 8, 3, 7, 30),
    EndTime: new Date(2018, 8, 3, 9, 30),
    Description: 'Consulting',
    DepartmentName: 'GENERAL'
  },
  {
    Id: 2,
    Name: 'Milan',
    StartTime: new Date(2018, 8, 4, 8, 30),
    EndTime: new Date(2018, 8, 4, 10, 30),
    Description: 'Bad Breath',
    DepartmentName: 'DENTAL'
  },
  {
    Id: 3,
    Name: 'Laura',
    StartTime: new Date(2018, 8, 4, 9, 30),
    EndTime: new Date(2018, 8, 4, 10, 30),
    Description: 'Eye Checkup',
    DepartmentName: 'GENERAL'
  },
  {
    Id: 4,
    Name: 'Janet',
    StartTime: new Date(2018, 8, 3, 11, 0),
    EndTime: new Date(2018, 8, 3, 12, 30),
    Description: 'Gum Disease',
    DepartmentName: 'DENTAL'
  },
  {
    Id: 5,
    Name: 'Adams',
    StartTime: new Date(2018, 8, 3, 11, 0),
    EndTime: new Date(2018, 8, 3, 12, 30),
    Description: 'Observation',
    DepartmentName: 'GENERAL'
  },
  {
    Id: 6,
    Name: 'John',
    StartTime: new Date(2018, 8, 3, 11, 0),
    EndTime: new Date(2018, 8, 3, 12, 30),
    Description: 'Mouth Sores',
    DepartmentName: 'DENTAL'
  }
];



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})


export class CalendarComponent implements  OnChanges{

  @Input() trainings: Entrainements[];
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  @ViewChild('treeObj')
  public training: Entrainements;

  public treeObj: TreeViewComponent;

  public isTreeItemDropped: boolean = false;
  public draggedItemId: string = '';

  public data: any[] = <Object[]> extend([], hospitalData, null, true);
  public selectedDate: Date = new Date(2018, 7, 1);
  public currentView: View = 'TimelineDay';
  public workHours: WorkHoursModel = { start: '08:00', end: '18:00' };
  public departmentDataSource: any[] = [
    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
  ];
  public consultantDataSource: any[] = [
    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
  ];
  public group: GroupModel = { enableCompactView: false, resources: ['Departments', 'Consultants'] };
  public allowMultiple: Boolean = false;
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      subject: { title: 'Patient Name', name: 'Name' },
      startTime: { title: 'From', name: 'StartTime' },
      endTime: { title: 'To', name: 'EndTime' },
      description: { title: 'Reason', name: 'Description' }
    }
  };


  // public field: any = { dataSource: waitingList, id: 'Id', text: 'Name' };
  public allowDragAndDrop: boolean = true;
  public field: any;


  constructor() {
  }
  ngOnChanges() {
    this.field = { dataSource: this.trainings }
  }

  getConsultantName(value: ResourceDetails): string {
    return (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
  }

  getConsultantStatus(value: ResourceDetails): boolean {
    const resourceName: string =
      (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
    if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
      return false;
    } else {
      return true;
    }
  }

  getConsultantDesignation(value: ResourceDetails): string {
    const resourceName: string =
      (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string;
    if (resourceName === 'GENERAL' || resourceName === 'DENTAL') {
      return '';
    } else {
      return (value as ResourceDetails).resourceData.Designation as string;
    }
  }

  getConsultantImageName(value: ResourceDetails): string {
    return this.getConsultantName(value).toLowerCase();
  }

  onItemDrag(event: any): void {
    if (this.scheduleObj.isAdaptive) {
      const classElement: HTMLElement = this.scheduleObj.element.querySelector('.e-device-hover');
      if (classElement) {
        classElement.classList.remove('e-device-hover');
      }
      if (event.target.classList.contains('e-work-cells')) {
        addClass([event.target], 'e-device-hover');
      }
    }
    if (document.body.style.cursor === 'not-allowed') {
      document.body.style.cursor = '';
    }
    if (event.name === 'nodeDragging') {
      const dragElementIcon: NodeListOf<HTMLElement> =
        document.querySelectorAll('.e-drag-item.treeview-external-drag .e-icon-expandable');
      for (let i: number = 0; i < dragElementIcon.length; i++) {
        dragElementIcon[i].style.display = 'none';
      }
    }
  }

  onActionBegin(event: ActionEventArgs): void {
    if (event.requestType === 'eventCreate' && this.isTreeItemDropped) {
      const treeViewdata: { [key: string]: any }[] = this.treeObj.fields.dataSource as { [key: string]: any }[];
      const filteredPeople: { [key: string]: any }[] =
        treeViewdata.filter((item: any) => item.Id !== parseInt(this.draggedItemId, 10));
      this.treeObj.fields.dataSource = filteredPeople;
      const elements: NodeListOf<HTMLElement> = document.querySelectorAll('.e-drag-item.treeview-external-drag');
      for (let i: number = 0; i < elements.length; i++) {
        remove(elements[i]);
      }
    }
  }

  onTreeDragStop(event: DragAndDropEventArgs): void {
    const treeElement: Element = <Element> closest(event.target, '.e-treeview');
    const classElement: HTMLElement = this.scheduleObj.element.querySelector('.e-device-hover');
    if (classElement) {
      classElement.classList.remove('e-device-hover');
    }
    if (!treeElement) {
      event.cancel = true;
      const scheduleElement: Element = <Element>  closest(event.target, '.e-content-wrap');
      if (scheduleElement) {
        const treeviewData: { [key: string]: any }[] =
          this.treeObj.fields.dataSource as { [key: string]: any }[];
        if (event.target.classList.contains('e-work-cells')) {
          const filteredData: { [key: string]: any }[] =
            treeviewData.filter((item: any) => item.Id === parseInt(event.draggedNodeData.id as string, 10));
          const cellData: CellClickEventArgs = this.scheduleObj.getCellDetails(event.target);
          const resourceDetails: ResourceDetails = this.scheduleObj.getResourcesByIndex(cellData.groupIndex);
          const eventData: { [key: string]: any } = {
            Name: filteredData[0].Name,
            StartTime: cellData.startTime,
            EndTime: cellData.endTime,
            IsAllDay: cellData.isAllDay,
            Description: filteredData[0].Description,
            DepartmentID: resourceDetails.resourceData.GroupId,
            ConsultantID: resourceDetails.resourceData.Id
          };
          this.scheduleObj.openEditor(eventData, 'Add', true);
          this.isTreeItemDropped = true;
          this.draggedItemId = event.draggedNodeData.id as string;
        }
      }
    }
  }

}
