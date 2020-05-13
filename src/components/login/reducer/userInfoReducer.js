import {GET_USER_FULL_NAME} from '../actions/actions';

const initialState = {
    userRole: 'Moderator',
    full_name: '',
    avatar: '',
}

const userInfoReducer = (state = initialState, action) => {
    switch(action){
        case GET_USER_FULL_NAME:
            return
    }
    return state;
}

export default userInfoReducer;