'use strict';

import knex from 'knex';
import knexfile from '../../knexfile';
import { Achievement } from '../../types/models/achievement';
import { Address } from '../../types/models/address';
import { File } from '../../types/models/file';
import { Notification } from '../../types/models/notification';
import { Payment } from '../../types/models/payment';
import { Product } from '../../types/models/product';
import { Purchase } from '../../types/models/purchase';
import { PurchaseProduct } from '../../types/models/purchaseProduct';
import { Restaurant } from '../../types/models/restaurant';
import { User } from '../../types/models/user';
import { UserNotification } from '../../types/models/userNotification';
import { UserReservation } from '../../types/models/userReservations';
import { Facility } from '../../types/models/facility';
import { PurchaseReview } from '../../types/models/purchaseReviews';

const env = process.env.NODE_ENV || 'development';

const database = knex(
  knexfile[env as 'development' | 'production' | 'staging'],
);

export const Users = () => database<User>('users');
export const Restaurants = () => database<Restaurant>('restaurants');
export const Products = () => database<Product>('products');
export const Files = () => database<File>('files');
export const Achievements = () => database<Achievement>('achievements');
export const Addresses = () => database<Address>('addresses');
export const UserNotifications = () =>
  database<UserNotification>('userNotifications');
export const Notifications = () => database<Notification>('notifications');
export const UserReservations = () =>
  database<UserReservation>('userReservations');
export const Purchases = () => database<Purchase>('purchases');
export const PurchaseProducts = () =>
  database<PurchaseProduct>('purchaseProducts');
export const Payments = () => database<Payment>('payments');
export const RestaurantFacilities = () =>
  database<Facility>('restaurantFacilities');
export const Facilities = () => database<Facility>('facilities');
export const PurchaseReviews = () =>
  database<PurchaseReview>('purchaseReviews');

export default database;
