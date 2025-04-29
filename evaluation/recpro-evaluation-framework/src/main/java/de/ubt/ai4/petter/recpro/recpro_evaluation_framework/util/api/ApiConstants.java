package de.ubt.ai4.petter.recpro.recpro_evaluation_framework.util.api;

public final class ApiConstants {
    public static final String BASE = "/api/";

    public static final String BPM = BASE + "bpm/";
    public static final String BPM_MODELING = BPM + "modeling/";
    public static final String BPM_PROCESS_MODELING = BPM_MODELING + "process/";
    public static final String BPM_ACTIVITY_MODELING = BPM_MODELING + "activity/";

    public static final String ERC_DATA = BASE + "data/";
    public static final String ERC_DATA_MODELING = ERC_DATA + "modeling/";
    public static final String ERC_DATA_META_ATTRIBUTE_MODELING = ERC_DATA_MODELING + "metaAttribute/";
    public static final String ERC_DATA_ACTIVITY_PARAMETER_MODELING = ERC_DATA_MODELING + "activityParameter/";
    public static final String ERC_DATA_ENVIRONMENT_PARAMETER_MODELING = ERC_DATA_MODELING + "environmentParameter/";

    public static final String ERC_DATA_EXECUTION = ERC_DATA + "execution/";
    public static final String ERC_DATA_ACTIVITY_PARAMETER_EXECUTION = ERC_DATA_EXECUTION + "activityParameter/";


    public static final String RECPRO = BASE + "recpro/";
    public static final String RECPRO_MODELING = RECPRO + "modeling/";
    public static final String RECPRO_MODELING_ERC_DATA = RECPRO_MODELING + "erc/";
    public static final String RECPRO_MODELING_ERC_DATA_META_ATTRIBUTE_CONFIGURATION = RECPRO_MODELING_ERC_DATA + "metaAttributeConfiguration/";
    public static final String RECPRO_MODELING_ERC_DATA_ACTIVITY_PARAMETER_CONFIGURATION = RECPRO_MODELING_ERC_DATA + "activityParameterConfiguration/";
    public static final String RECPRO_MODELING_ERC_DATA_ENVIRONMENTAL_PARAMETER_CONFIGURATION = RECPRO_MODELING_ERC_DATA + "environmentalParameterConfiguration/";

    public static final String BPM_EXECUTION = BPM + "execution/";
    public static final String BPM_PROCESS_EXECUTION = BPM_EXECUTION + "process/";
    public static final String BPM_TASKLIST_EXECUTION = BPM_EXECUTION + "tasklist/";
    public static final String BPM_TASK_EXECUTION = BPM_EXECUTION + "task/";

    public static final String FEEDBACK = BASE + "feedback/";
    public static final String FEEDBACK_MODELING = FEEDBACK + "modeling/";
    public static final String FEEDBACK_EXECUTION = FEEDBACK + "execution/";

    public static final String RECOMMENDATION = BASE + "recommendation/";
    public static final String RECOMMENDATION_MODELING = RECOMMENDATION + "modeling/";
    public static final String RECOMMENDATION_EXECUTION = RECOMMENDATION + "execution/";

    public static final String RECOMMENDATION_DIMENSION = RECOMMENDATION + "dimension/";
    public static final String RECOMMENDATION_DIMENSION_MODELING = RECOMMENDATION_DIMENSION + "modeling/";
    public static final String RECOMMENDATION_DIMENSION_EXECUTION = RECOMMENDATION_DIMENSION + "execution/";

    public static final String FILTER = BASE + "filter/";
    public static final String FILTER_MODELING = FILTER + "modeling/";
    public static final String FILTER_EXECUTION = FILTER + "execution/";

    public static final String USER = BASE + "user/";
    public static final String USER_MODELING = USER + "modeling/";
    public static final String USER_EXECUTION = USER + "execution/";

    public static final String ID = "{id}";
    public static final String IDS = "{ids}";
    public static final String MAIL = "{mail}";
    public static final String LABEL = "{label}";

    public static final String GET = "get/";
    public static final String GET_ALL = "getAll";
    public static final String GET_ALL_IDS = "getAll/";
    public static final String GET_BY_IDS = "getByIds";
    public static final String GET_ACTIVE = "getActive/";
    public static final String GET_LATEST = "getLatest";
    public static final String GET_MODEL = "getModel/";
    public static final String GET_BY_MAIL = "getByMail/";
    public static final String GET_BY_LABEL = "getByLabel/";
    public static final String CREATE = "create";
    public static final String CREATE_ALL = "createAll";
    public static final String DELETE = "delete";
    public static final String UPDATE = "update";
    public static final String DELETE_ALL = "deleteAll";
    public static final String DELETE_ID = "delete/";
    public static final String START = "start/";
    public static final String SET_ATTRIBUTES = "setAttributes/";
    public static final String GET_ATTRIBUTES = "getAttributes/";
    public static final String CLAIM = "claim/";
    public static final String UNCLAIM = "unclaim/";
    public static final String ASSIGN = "assign/";
    public static final String INITIALIZE = "initialize";
    public static final String COMPLETE = "complete/";
    public static final String PRIORITY = "priority/";
    public static final String SET = "set/";
    public static final String GET_BY_PROCESS_ID = "getByProcessId/";
    public static final String GET_BY_ACTIVITY_ID = "getByActivityId/";
    public static final String GET_BY_META_ATTRIBUTE_ID = "getByMetaAttributeId/";
    public static final String GET_BY_ACTIVITY_PARAMETER_ID = "getByActivityParameterId/";
    public static final String GET_BY_TASK_INSTANCE_ID = "getByTaskInstanceId/";

    public static final String ASSIGNEE_ID = "assigneeId/";

    public static final String GET_DEFAULT = "getDefault";
    public static final String SET_DEFAULT = "setDefault/";
    public static final String SET_PRIORITY = "setPriority/";
    public static final String GET_BY_TYPE = "getByType/";

    public static final String ACTIVITY_ID = "activityId";
    public static final String META_ATTRIBUTE_ID = "metaAttributeId";
    public static final String TYPE = "type/";
    public static final String TYPE_ID = "{type}";

    public static final String USER_ID = "X-User-ID";
    public static final String APPLY_RECOMMENDATION = "applyRecommendation";
}
