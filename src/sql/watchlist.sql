CREATE TABLE watchlist (
	id SERIAL PRIMARY KEY,
	domain_code INT NOT NULL UNIQUE,
	name_emp VARCHAR(250) NOT NULL UNIQUE,
	entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	payment_date TIMESTAMP,
	onboarding_date TIMESTAMP,
	number_invoices INT,
	number_access INT,
	digital_certificate BOOLEAN,
	updated_date TIMESTAMP,
	contact_whatsapp TEXT
)