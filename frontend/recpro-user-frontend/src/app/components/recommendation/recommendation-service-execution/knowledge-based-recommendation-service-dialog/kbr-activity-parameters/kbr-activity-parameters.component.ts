import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {
  AbstractActParamUserCriteria,
  AbstractActParamUserCriteriaInstance,
  ActParamBinaryUserCriteria,
  ActParamBinaryUserCriteriaInstance,
  ActParamDateUserCriteria,
  ActParamDateUserCriteriaInstance,
  ActParamNumericUserCriteria,
  ActParamNumericUserCriteriaInstance,
  ActParamTextualUserCriteria,
  ActParamTextualUserCriteriaInstance,
  KnowledgeBasedRecommendationServiceInstance,
  ParameterType,
  UserCriteriaType
} from '@recprocess/recpro-frontend-lib';
import {MatModule} from '../../../../../util/mat/mat.module';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-kbr-activity-parameters',
  imports: [
    MatModule,
    FormsModule,
    NgForOf,
    NgSwitchCase,
    NgSwitch
  ],
  standalone: true,
  templateUrl: './kbr-activity-parameters.component.html',
  styleUrl: './kbr-activity-parameters.component.scss'
})
export class KbrActivityParametersComponent implements AfterViewInit {

  recommendationServiceInstance: KnowledgeBasedRecommendationServiceInstance = new KnowledgeBasedRecommendationServiceInstance();

  @Input() set recommendationServiceInstanceInput(recommendationServiceInstance: KnowledgeBasedRecommendationServiceInstance) {
    this.recommendationServiceInstance = recommendationServiceInstance;
    this.tableDataSource.data = this.recommendationServiceInstance.actParamUserCriteriaInstance;
  }

  selectedCriteria: AbstractActParamUserCriteria = new AbstractActParamUserCriteria();

  displayedColumns: string[] = ['parameter', 'comparison', 'value', 'delete']
  tableDataSource: MatTableDataSource<AbstractActParamUserCriteriaInstance> = new MatTableDataSource<AbstractActParamUserCriteriaInstance>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.sort;
  }

  addCriteria() {
    let criteriaInstance: AbstractActParamUserCriteriaInstance = new AbstractActParamUserCriteriaInstance();

    switch (this.selectedCriteria.parameterType) {
      case ParameterType.NUMERIC: {
        criteriaInstance = this.createNumericUserCriteriaInstance(this.selectedCriteria as ActParamNumericUserCriteria);
        break;
      }
      case ParameterType.BINARY: {
        criteriaInstance = this.createBinaryUserCriteriaInstance(this.selectedCriteria as ActParamBinaryUserCriteria);
        break;
      }
      case ParameterType.TEXTUAL: {
        criteriaInstance = this.createTextualUserCriteriaInstance(this.selectedCriteria as ActParamTextualUserCriteria);
        break;
      }
      case ParameterType.DATE: {
        criteriaInstance = this.createDateUserCriteriaInstance(this.selectedCriteria as ActParamDateUserCriteria);
        break;
      }
      default: break;
    }

    this.recommendationServiceInstance.actParamUserCriteriaInstance.push(criteriaInstance)
    this.tableDataSource.data = this.recommendationServiceInstance.actParamUserCriteriaInstance;
    this.selectedCriteria = new AbstractActParamUserCriteria();
    console.log(this.recommendationServiceInstance);
  }

  deleteUserCriteriaInstance(row: AbstractActParamUserCriteriaInstance) {
    // this.recommendationServiceInstance.actParamUserCriteriaInstance.
  }

  private createNumericUserCriteriaInstance(userCriteria: ActParamNumericUserCriteria): ActParamNumericUserCriteriaInstance {
    let criteriaInstance = new ActParamNumericUserCriteriaInstance();
    criteriaInstance.criteriaType = UserCriteriaType.ACTIVITY_PARAMETER;
    criteriaInstance.parameterType = ParameterType.NUMERIC;
    criteriaInstance.userCriteria = userCriteria;
    return criteriaInstance;
  }

  private createBinaryUserCriteriaInstance(userCriteria: ActParamBinaryUserCriteria): ActParamBinaryUserCriteriaInstance {
    let criteriaInstance = new ActParamBinaryUserCriteriaInstance();
    criteriaInstance.criteriaType = UserCriteriaType.ACTIVITY_PARAMETER;
    criteriaInstance.parameterType = ParameterType.BINARY;
    criteriaInstance.userCriteria = userCriteria;
    return criteriaInstance;
  }

  private createDateUserCriteriaInstance(userCriteria: ActParamDateUserCriteria): ActParamDateUserCriteriaInstance {
    let criteriaInstance = new ActParamDateUserCriteriaInstance();
    criteriaInstance.criteriaType = UserCriteriaType.ACTIVITY_PARAMETER;
    criteriaInstance.parameterType = ParameterType.DATE;
    criteriaInstance.userCriteria = userCriteria;
    return criteriaInstance;
  }

  private createTextualUserCriteriaInstance(userCriteria: ActParamTextualUserCriteria): ActParamTextualUserCriteriaInstance {
    let criteriaInstance = new ActParamTextualUserCriteriaInstance();
    criteriaInstance.criteriaType = UserCriteriaType.ACTIVITY_PARAMETER;
    criteriaInstance.parameterType = ParameterType.TEXTUAL;
    criteriaInstance.userCriteria = userCriteria;
    return criteriaInstance;
  }

  comparisonOptions = [
    { value: 'EQUAL', label: 'equals' },
    { value: 'GREATER_THAN', label: 'greater than' },
    { value: 'LESS_THAN', label: 'less than' },
  ];
  protected readonly ParameterType = ParameterType;
}
