require 'active_support/concern'

module AddressHelper
  extend ActiveSupport::Concern

  included do
    before_validation :format_state, on: [:create, :update]

    enum states: {
      DC: 'DC',
      AS: 'AS',
      FM: 'FM',
      GU: 'GU',
      MH: 'MH',
      MP: 'MP',
      PR: 'PR',
      PW: 'PW',
      VI: 'VI',
      UM: 'UM',
      AL: 'AL',
      AK: 'AK',
      AZ: 'AZ',
      AR: 'AR',
      CA: 'CA',
      CO: 'CO',
      CT: 'CT',
      DE: 'DE',
      FL: 'FL',
      GA: 'GA',
      HI: 'HI',
      ID: 'ID',
      IL: 'IL',
      IN: 'IN',
      IA: 'IA',
      KS: 'KS',
      KY: 'KY',
      LA: 'LA',
      ME: 'ME',
      MD: 'MD',
      MA: 'MA',
      MI: 'MI',
      MN: 'MN',
      MS: 'MS',
      MO: 'MO',
      MT: 'MT',
      NE: 'NE',
      NV: 'NV',
      NH: 'NH',
      NJ: 'NJ',
      NM: 'NM',
      NY: 'NY',
      NC: 'NC',
      ND: 'ND',
      OH: 'OH',
      OK: 'OK',
      OR: 'OR',
      PA: 'PA',
      RI: 'RI',
      SC: 'SC',
      SD: 'SD',
      TN: 'TN',
      TX: 'TX',
      UT: 'UT',
      VT: 'VT',
      VA: 'VA',
      WA: 'WA',
      WV: 'WV',
      WI: 'WI',
      WY: 'WY'
    }

    def format_state
      self.state = self.class.format_state(state)
    end
  end

  module ClassMethods
    def us_states
      {
        DC: 'District of Columbia',
        AS: 'American Samoa',
        FM: 'Federated States of Micronesia',
        GU: 'Guam',
        MH: 'Marshall Islands',
        MP: 'Northern Mariana Islands',
        PR: 'Puerto Rico',
        PW: 'Palau',
        VI: 'U.S. Virgin Islands',
        UM: 'U.S. Minor Outlying Islands',
        AL: 'Alabama',
        AK: 'Alaska',
        AZ: 'Arizona',
        AR: 'Arkansas',
        CA: 'California',
        CO: 'Colorado',
        CT: 'Connecticut',
        DE: 'Delaware',
        FL: 'Florida',
        GA: 'Georgia',
        HI: 'Hawaii',
        ID: 'Idaho',
        IL: 'Illinois',
        IN: 'Indiana',
        IA: 'Iowa',
        KS: 'Kansas',
        KY: 'Kentucky',
        LA: 'Louisiana',
        ME: 'Maine',
        MD: 'Maryland',
        MA: 'Massachusetts',
        MI: 'Michigan',
        MN: 'Minnesota',
        MS: 'Mississippi',
        MO: 'Missouri',
        MT: 'Montana',
        NE: 'Nebraska',
        NV: 'Nevada',
        NH: 'New Hampshire',
        NJ: 'New Jersey',
        NM: 'New Mexico',
        NY: 'New York',
        NC: 'North Carolina',
        ND: 'North Dakota',
        OH: 'Ohio',
        OK: 'Oklahoma',
        OR: 'Oregon',
        PA: 'Pennsylvania',
        RI: 'Rhode Island',
        SC: 'South Carolina',
        SD: 'South Dakota',
        TN: 'Tennessee',
        TX: 'Texas',
        UT: 'Utah',
        VT: 'Vermont',
        VA: 'Virginia',
        WA: 'Washington',
        WV: 'West Virginia',
        WI: 'Wisconsin',
        WY: 'Wyoming'
      }
    end

    def format_state(state)
      return nil unless state

      match_state = us_states.select do |key, value|
        if state.length == 2
          key == state.upcase.to_sym
        else
          value.casecmp?(state)
        end
      end
      return nil unless match_state && match_state.length == 1

      match_state.keys[0]
    end
  end
end
