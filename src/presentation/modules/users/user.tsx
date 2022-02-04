/* eslint-disable @typescript-eslint/no-unused-vars */
import { useFetchAPIActionData } from '../../../application/hooks/useApiActionHooks';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';
import useUsersMethodsTodo from './hooks/useUsersMethods';
import { usersListValues } from './models/users';
import Test from './test';

function User() {
  const [state, { fetchUsersData }] = useUsersMethodsTodo();

  const [{ data: usersDetails = [], isLoading: isUsersDetailsAPILoading }] = useFetchAPIActionData({
    apiFunction: fetchUsersData,
    defaultResponseValue: [],
    dependencyArray: [],
    apiParams: '',
    apiCallCondition: true,
  });
  return (
    <>
      <ErrorBoundary>
        <Test />
      </ErrorBoundary>
      <div>
        <ErrorBoundary>
          {(isUsersDetailsAPILoading) && 'Loading '
            || (usersDetails && usersDetails.length > 0)
            ? usersDetails.map((item: usersListValues, key: number) => (
              <ul key={key}>
                <li>
                  Name:
                  {item.name}
                </li>
                <li>
                  User Name:
                  {item.username}
                </li>
                <li>
                  Email:
                  {item.email}
                </li>
                <li>
                  Website:
                  {item.website}
                </li>
              </ul>
            )) : 'No Data Found'}
        </ErrorBoundary>
      </div>

    </>
  );
}

export default User;
