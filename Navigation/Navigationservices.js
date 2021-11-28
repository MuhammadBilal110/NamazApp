import { NavigationActions } from 'react-navigation';


let _navigator;

export function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

export function navigate(routeName, params, actions) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
			actions
		}),
		
	);
}

// add other navigation functions that you need and export them

export default {
	navigate,
	setTopLevelNavigator,
};