import * as React from 'react';
import PrivateRoute from '../components/PrivateRoute';

import { CircleInformation, CircleApplication } from '../pages/request';
import RequestWrapper from '../pages/request/RequestWrapper';

export default ({ match }: { match: { path: string } }) => (
  <RequestWrapper>
    <PrivateRoute exact path={`${match.path}/circle`} component={CircleInformation} />
    <PrivateRoute
      path={`${match.path}/circle/application`}
      component={CircleApplication}
    />
  </RequestWrapper>
);
