const initState = {
    isLoading: false,
}
type InitialStateType = {
	isLoading: boolean
}

type ActionsType = LoadingActionType;

export const loadingReducer = (state = initState, action: ActionsType): InitialStateType => {

  switch (action.type) {
		case 'CHANGE_LOADING':
			return {...state, isLoading: action.isLoading}
    // пишет студент  // need to fix

    default:
      return state;
  }
};

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

