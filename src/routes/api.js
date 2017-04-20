import { Router } from 'express';
var stripe = require("stripe")(sk_test_z9Ed5biPdzoGepaT5WBeAcFp);
import authenticationController from './controllers/authentication';
import businessesController from './controllers/businesses';
import businessRegistrationsController from './controllers/businessRegistrations';
import activitiesController from './controllers/activities';
import activityBookingsController from './controllers/activityBookings';
import activityTypesController from './controllers/activityTypes';

export default ({ db }) => {
  const api = Router();

  /** Signup & Login */
  authenticationController({ api, db });

  /** Businesses */
  businessesController({ api, db });

  /** Business Registrations */
  businessRegistrationsController({ api, db });

  /** Activities */
  activitiesController({ api, db });

  /** Activity Bookings & Activity Booking Requests */
  activityBookingsController({ api, db });

  /** Activity Types & Activity Type Addition Requests */
  activityTypesController({ api, db });


  /**payment*/
  paymentMethod({api,db});

  return api;
};
