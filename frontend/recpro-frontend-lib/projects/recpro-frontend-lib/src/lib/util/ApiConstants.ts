export class ApiConstants {
  static BASE_API_URL = '';

  static initialize(baseUrl: string): void {
    if (!baseUrl) {
      throw new Error('BASE_API_URL is required for ApiConstants initialization.');
    }
    this.BASE_API_URL = `${baseUrl}/api/`;

    this.BPM = `${this.BASE_API_URL}bpm/`;
    this.BPM_MODELING = `${this.BPM}modeling/`;
    this.BPM_PROCESS_MODELING = `${this.BPM_MODELING}process/`;
    this.BPM_ACTIVITY_MODELING = `${this.BPM_MODELING}activity/`;

    this.BPM_EXECUTION = `${this.BPM}execution/`;
    this.BPM_PROCESS_EXECUTION = `${this.BPM_EXECUTION}process/`;
    this.BPM_TASK_EXECUTION = `${this.BPM_EXECUTION}task/`;
    this.BPM_TASKLIST_EXECUTION = `${this.BPM_EXECUTION}tasklist/`;


    this.FEEDBACK = `${this.BASE_API_URL}feedback/`;
    this.FEEDBACK_MODELING = `${this.FEEDBACK}modeling/`;
    this.FEEDBACK_EXECUTION = `${this.FEEDBACK}execution/`;

    this.ERC_DATA = `${this.BASE_API_URL}data/`;
    this.ERC_DATA_MODELING = `${this.ERC_DATA}modeling/`;
    this.ERC_DATA_META_ATTRIBUTE_MODELING = `${this.ERC_DATA_MODELING}metaAttribute/`;
    this.ERC_DATA_ACTIVITY_PARAMETER_MODELING = `${this.ERC_DATA_MODELING}activityParameter/`;
    this.ERC_DATA_ENVIRONMENT_PARAMETER_MODELING = `${this.ERC_DATA_MODELING}environmentParameter/`;

    this.ERC_DATA_EXECUTION= `${this.ERC_DATA}execution/`;
    this.ERC_DATA_ACTIVITY_PARAMETER_EXECUTION = `${this.ERC_DATA_EXECUTION}activityParameter/`;

    this.RECPRO= `${this.BASE_API_URL}recpro/`;
    this.RECPRO_MODELING = `${this.RECPRO}modeling/`;
    this.RECPRO_MODELING_ERC_DATA = `${this.RECPRO_MODELING}erc/`;
    this.RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION = `${this.RECPRO_MODELING_ERC_DATA}metaAttributeConfiguration/`;
    this.RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION = `${this.RECPRO_MODELING_ERC_DATA}environmentalParameterConfiguration/`;
    this.RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION = `${this.RECPRO_MODELING_ERC_DATA}activityParameterConfiguration/`;

    this.RECOMMENDATION= `${this.BASE_API_URL}recommendation/`;
    this.RECOMMENDATION_MODELING = `${this.RECOMMENDATION}modeling/`;
    this.RECOMMENDATION_EXECUTION = `${this.RECOMMENDATION}execution/`;

    this.RECOMMENDATION_DIMENSION = `${this.RECOMMENDATION}dimension/`;
    this.RECOMMENDATION_DIMENSION_MODELING = `${this.RECOMMENDATION_DIMENSION}modeling/`;
    this.RECOMMENDATION_DIMENSION_EXECUTION = `${this.RECOMMENDATION_DIMENSION}execution/`;

    this.USER = `${this.BASE_API_URL}user/`;
    this.USER_MODELING = `${this.USER}modeling/`;

  }



  // BPM Modeling:
  static BPM: string;
  static BPM_MODELING: string;
  static BPM_PROCESS_MODELING: string;
  static BPM_ACTIVITY_MODELING: string;

  // BPM Execution:
  static BPM_EXECUTION: string;
  static BPM_PROCESS_EXECUTION: string;
  static BPM_TASK_EXECUTION: string;
  static BPM_TASKLIST_EXECUTION: string;

  // FEEDBACK:
  static FEEDBACK: string;
  static FEEDBACK_MODELING: string;
  static FEEDBACK_EXECUTION: string;

  // ERC Data Modeling:
  static ERC_DATA: string;
  static ERC_DATA_MODELING: string;
  static ERC_DATA_META_ATTRIBUTE_MODELING: string;
  static ERC_DATA_ACTIVITY_PARAMETER_MODELING: string;
  static ERC_DATA_ENVIRONMENT_PARAMETER_MODELING: string;

  // ERC Data Execution:
  static ERC_DATA_EXECUTION: string;
  static ERC_DATA_ACTIVITY_PARAMETER_EXECUTION: string;

  // RECPRO:
  static RECPRO: string;
  static RECPRO_MODELING: string;
  static RECPRO_MODELING_ERC_DATA: string;
  static RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION: string;
  static RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION: string;
  static RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION: string;

  // Recommendation:
  static RECOMMENDATION: string;
  static RECOMMENDATION_MODELING: string;
  static RECOMMENDATION_EXECUTION: string;

  static RECOMMENDATION_DIMENSION: string;
  static RECOMMENDATION_DIMENSION_MODELING: string;
  static RECOMMENDATION_DIMENSION_EXECUTION: string;

  // User:
  static USER: string;
  static USER_MODELING: string;

  static readonly GET: string = 'get/';
  static readonly GET_BY_PROCESS_ID: string = 'getByProcessId/';
  static readonly GET_BY_ACTIVITY_ID: string = 'getByActivityId/';
  static readonly GET_BY_META_ATTRIBUTE_ID: string = 'getByMetaAttributeId/';
  static readonly GET_BY_ACTIVITY_PARAMETER_ID: string = 'getByActivityParameterId/';
  static readonly GET_BY_IDS: string = 'getByIds/';
  static readonly GET_ACTIVE: string = 'getActive/';
  static readonly SET_ACTIVE: string = 'setActive/';
  static readonly GET_ALL: string = 'getAll';
  static readonly CREATE: string = 'create';
  static readonly CREATE_ALL: string = 'createAll';
  static readonly UPDATE: string = 'update';
  static readonly DELETE: string = 'delete';
  static readonly DELETE_ID: string = 'delete/';
  static readonly INITIALIZE: string = 'initialize';

  static readonly START_ID = 'start/';
  static readonly CLAIM_ID: string = 'claim/';
  static readonly ASSIGN_ID: string = 'assign/';
  static readonly COMPLETE_ID: string = 'complete/';
  static readonly SET_PRIORITY: string = 'setPriority/';

  static readonly ACTIVITY_ID: string = 'activityId';
  static readonly META_ATTRIBUTE_ID: string = 'metaAttributeId';
  static readonly ASSIGNEE_ID: string = 'assigneeId/';
}
