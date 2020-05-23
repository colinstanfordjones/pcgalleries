class Note < ApplicationRecord
  enum status: {
    no_answer: 'no_answer',
    started_pitch: 'started_pitch',
    finished_pitch: 'finished_pitch',
    closed: 'closed'
  }
end
