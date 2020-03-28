import {
    GET_PROPERTY_FAILURE,
    GET_PROPERTY_START,
    GET_PROPERTY_SUCCESS,
    CREATE_PROPERTY_FAILURE,
    CREATE_PROPERTY_SUCCESS,
    CREATE_PROPERTY_START,
    UPDATE_PROPERTY_FAILURE,
    UPDATE_PROPERTY_START,
    UPDATE_PROPERTY_SUCCESS,
    DELETE_PROPERTY_FAILURE,
    DELETE_PROPERTY_START,
    DELETE_PROPERTY_SUCCESS,
    GET_SINGLE_PROPERTY_SUCCESS,
} from '../actions';

import { mapObject, removeObjectFromMap } from '../../util';

const initialState = {
    list: {},
    active: {
        id: 0,
        address: '',
        city: '',
        state: '',
        zip: Number.parseInt('00000'),
        description: '',
        children_allowed: false,
        property_type: '',
        floors: 0,
        bedrooms_number: 0,
        bathrooms_number: 0,
        amenities: '',
        price: Number.parseFloat(0),
        owner: {},
    },

    status: {
        isLoading: null,
        errors: {
            message: null,
        },
    },
};

export const property = (state = { ...initialState }, action) => {
    switch (action.type) {
        case GET_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case GET_PROPERTY_SUCCESS:
            const fetchedMappedPropertyList = mapObject(action.payload);
            console.log(fetchedMappedPropertyList);
            return {
                ...state,
                list: { ...fetchedMappedPropertyList },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };

        case GET_SINGLE_PROPERTY_SUCCESS: {
            const property = action.payload;
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                },
                active: {
                    ...property,
                },
            };
        }

        case GET_PROPERTY_FAILURE:
            return {
                ...state,
                list: {},
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.status.errors,
                        message: action.payload.message,
                    },
                },
            };
        case CREATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case CREATE_PROPERTY_SUCCESS:
            // add to list by reconverting list back to array and subjecting to mapObject
            // issue -> action.payload => id of newly created object
            // solution, query /user/:id
            // solution won't work due to async nature and synchronous nature of redux
            // const newlyCreatedPropertyList = insertObjectToMap(
            //     action.payload,
            //     state.list,
            // );
            return {
                ...state,
                // list: { ...newlyCreatedPropertyList },
                status: {
                    isLoading: false,
                },
            };
        case CREATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.status.errors,
                        message: action.payload.message,
                    },
                },
            };

        case UPDATE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case UPDATE_PROPERTY_SUCCESS:
            // payload is updated object with id
            let { id } = action.payload;
            const property = { ...state.list[id], ...action.payload };
            return {
                ...state,
                list: {
                    ...state.list,
                    [id]: { ...property },
                },
                status: {
                    ...state.status,
                    isLoading: false,
                },
            };
        case UPDATE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.status.errors,
                        message: action.payload.message,
                    },
                },
            };

        case DELETE_PROPERTY_START:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: true,
                    errors: {
                        ...state.errors,
                        message: '',
                    },
                },
            };
        case DELETE_PROPERTY_SUCCESS:
            // this is where we remove said object, we are given an id
            const { id: propertyIdToDelete } = action.payload;
            const listWithoutId = removeObjectFromMap(
                propertyIdToDelete,
                state.list,
            );
            return {
                ...state,
                list: { ...listWithoutId },
                status: { ...state.status, isLoading: false },
            };
        case DELETE_PROPERTY_FAILURE:
            return {
                ...state,
                status: {
                    ...state.status,
                    isLoading: false,
                    errors: {
                        ...state.status.errors,
                        message: action.payload.message,
                    },
                },
            };
        default:
            return { ...state };
    }
};
