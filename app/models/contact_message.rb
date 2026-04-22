class ContactMessage < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :subject, presence: true, length: { minimum: 3 }
  validates :message, presence: true, length: { minimum: 10 }
end