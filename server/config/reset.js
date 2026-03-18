import { pool } from './database.js'

const createTables = `
  DROP TABLE IF EXISTS events;
  DROP TABLE IF EXISTS locations;

  CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(50),
    zip VARCHAR(20),
    image VARCHAR(500)
  );

  CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(100),
    time VARCHAR(100),
    image VARCHAR(500),
    location_id INTEGER REFERENCES locations(id)
  );
`

const seedLocations = `
  INSERT INTO locations (name, address, city, state, zip, image) VALUES
  ('Echo Lounge',            '551 Flat Shoals Ave SE', 'Atlanta', 'GA', '30316', 'https://picsum.photos/seed/echolounge/600/400'),
  ('House of Blues',         '308 N. Green St',        'Chicago', 'IL', '60607', 'https://picsum.photos/seed/houseofblues/600/400'),
  ('The Pavilion',           '1600 Pavilion Pl',       'Nashville', 'TN', '37217', 'https://picsum.photos/seed/pavilion/600/400'),
  ('American Airlines Center','2500 Victory Ave',      'Dallas',   'TX', '75219', 'https://picsum.photos/seed/americanairlines/600/400');
`

const seedEvents = `
  INSERT INTO events (title, date, time, image, location_id) VALUES
  ('Jazz & Blues Night',        'March 22, 2026', '8:00 PM',  'https://picsum.photos/seed/jazz/400/400',         1),
  ('Indie Band Showcase',       'April 5, 2026',  '7:30 PM',  'https://picsum.photos/seed/indie/400/400',        1),
  ('Comedy Open Mic',           'April 19, 2026', '9:00 PM',  'https://picsum.photos/seed/comedy/400/400',       1),
  ('Blues Revival Festival',    'March 28, 2026', '6:00 PM',  'https://picsum.photos/seed/blues/400/400',        2),
  ('Rock Legends Night',        'April 12, 2026', '8:00 PM',  'https://picsum.photos/seed/rock/400/400',         2),
  ('Gospel Sunday Brunch',      'April 26, 2026', '11:00 AM', 'https://picsum.photos/seed/gospel/400/400',       2),
  ('Summer Music Festival',     'May 10, 2026',   '2:00 PM',  'https://picsum.photos/seed/festival/400/400',     3),
  ('EDM Takeover',              'May 24, 2026',   '10:00 PM', 'https://picsum.photos/seed/edm/400/400',          3),
  ('Food & Music Fair',         'June 7, 2026',   '12:00 PM', 'https://picsum.photos/seed/foodmusic/400/400',    3),
  ('NBA Watch Party',           'April 8, 2026',  '7:00 PM',  'https://picsum.photos/seed/basketball/400/400',   4),
  ('Stand-Up Comedy Tour',      'April 30, 2026', '8:00 PM',  'https://picsum.photos/seed/standup/400/400',      4),
  ('Electronic Dance Festival', 'May 17, 2026',   '9:00 PM',  'https://picsum.photos/seed/electronic/400/400',  4);
`

const seed = async () => {
  try {
    await pool.query(createTables)
    console.log('Tables created')
    await pool.query(seedLocations)
    console.log('Locations seeded')
    await pool.query(seedEvents)
    console.log('Events seeded')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    pool.end()
  }
}

seed()
