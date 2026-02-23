const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

console.log('Full URL:', process.env.DATABASE_URL);
console.log('URL length:', process.env.DATABASE_URL?.length);
console.log('First 20 chars:', process.env.DATABASE_URL?.substring(0, 20));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    console.log('Current time from database:', result.rows[0].now);
    await pool.end();
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    console.error('Full error:', error);
  }
}

testConnection();