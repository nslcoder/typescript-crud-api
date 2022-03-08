import { connect } from 'mongoose';

export const connectDB = async () => {
  await connect(process.env.DB_URL || '');
  console.log('Database is connected.');
};
