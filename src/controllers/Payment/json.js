body merchant order {
    id: 16677662759,
    status: 'opened',
    external_reference: '',
    preference_id: '1473411825-ae9aee46-80b1-4aae-861a-517c2acc37d0',
    payments: [],
    shipments: [],
    payouts: [],
    collector: { id: 1473411825, email: '', nickname: 'TESTUSER1927830926' },
    marketplace: 'NONE',
    notification_url: 'https://neogn-back-584v.onrender.com/api/payment/webhook/50e38f74-3576-4103-927b-2a2f376e1db2',
    date_created: '2024-03-14T22:35:24.339-04:00',
    last_updated: '2024-03-14T22:35:24.339-04:00',
    sponsor_id: null,
    shipping_cost: 0,
    total_amount: 269,
    site_id: 'MLA',
    paid_amount: 0,
    refunded_amount: 0,
    payer: null,
    items: [
      {
        id: 'SKU001',
        category_id: '',
        currency_id: 'ARS',
        description: 'Experimenta la última innovación en visualización con el monitor UltraView Pro X1. Este monitor de vanguardia presenta una pantalla curva de 32 pulgadas con una resolución 4K UHD.',
        picture_url: null,
        title: 'Monitor Odyssey G4',
        quantity: 1,
        unit_price: 269
      }
    ],
    cancelled: false,
    additional_info: '',
    application_id: null,
    is_test: false,
    order_status: 'payment_required'
  }

  body merchant order {
    id: 16677662759,
    status: 'opened',
    external_reference: '',
    preference_id: '1473411825-ae9aee46-80b1-4aae-861a-517c2acc37d0',
    payments: [],
    shipments: [],
    payouts: [],
    collector: { id: 1473411825, email: '', nickname: 'TESTUSER1927830926' },
    marketplace: 'NONE',
    notification_url: 'https://neogn-back-584v.onrender.com/api/payment/webhook/50e38f74-3576-4103-927b-2a2f376e1db2',
    date_created: '2024-03-14T22:35:24.339-04:00',
    last_updated: '2024-03-14T22:35:24.339-04:00',
    sponsor_id: null,
    shipping_cost: 0,
    total_amount: 269,
    site_id: 'MLA',
    paid_amount: 0,
    refunded_amount: 0,
    payer: null,
    items: [
      {
        id: 'SKU001',
        category_id: '',
        currency_id: 'ARS',
        description: 'Experimenta la última innovación en visualización con el monitor UltraView Pro X1. Este monitor de vanguardia presenta una pantalla curva de 32 pulgadas con una resolución 4K UHD.',
        picture_url: null,
        title: 'Monitor Odyssey G4',
        quantity: 1,
        unit_price: 269
      }
    ],
    cancelled: false,
    additional_info: '',
    application_id: null,
    is_test: false,
    order_status: 'payment_required'
  }










  payment.body {
    accounts_info: null,
    acquirer_reconciliation: [],
    
    additional_info: {
      authentication_code: null,
      available_balance: null,
      ip_address: '186.22.17.240',
      items: [ [Object] ],
      nsu_processadora: null
    },

    authorization_code: '229549003',
    binary_mode: false,
    brand_id: null,
    build_version: '54.20.15-hotfix-33',
    call_for_authorize_id: null,
    captured: true,
    
    card: {
      cardholder: { identification: [Object], name: 'APRO' },
      date_created: '2024-03-14T22:35:24.000-04:00',
      date_last_updated: '2024-03-14T22:35:24.000-04:00',
      expiration_month: 11,
      expiration_year: 2025,
      first_six_digits: '371180',
      id: null,
      last_four_digits: '7522'
    },

    charges_details: [
      {
        accounts: [Object],
        amounts: [Object],
        client_id: 0,
        date_created: '2024-03-14T22:35:24.000-04:00',
        id: '1317470870-001',
        last_updated: '2024-03-14T22:35:24.000-04:00',
        metadata: {},
        name: 'mercadopago_fee',
        refund_charges: [],
        reserve_id: null,
        type: 'fee'
      }
    ],

    collector_id: 1473411825,
    corporation_id: null,
    counter_currency: null,
    coupon_amount: 0,
    currency_id: 'ARS',
    date_approved: '2024-03-14T22:35:24.981-04:00',
    date_created: '2024-03-14T22:35:24.856-04:00',
    date_last_updated: '2024-03-14T22:35:24.981-04:00',
    date_of_expiration: null,
    deduction_schema: null,
    description: 'Monitor Odyssey G4',
    differential_pricing_id: null,
    external_reference: null,
    
    fee_details: [
      { amount: 11.03, fee_payer: 'collector', type: 'mercadopago_fee' }
    ],

    financing_group: null,
    id: 1317470870,
    installments: 1,
    integrator_id: null,
    issuer_id: '2',
    live_mode: false,
    marketplace_owner: null,
    merchant_account_id: null,
    merchant_number: null,
    metadata: {},
    money_release_date: '2024-04-01T22:35:24.981-04:00',
    money_release_schema: null,
    money_release_status: 'pending',
    notification_url: 'https://neogn-back-584v.onrender.com/api/payment/webhook/50e38f74-3576-4103-927b-2a2f376e1db2',
    operation_type: 'regular_payment',
    
    order: { id: '16677662759', type: 'mercadopago' },
    
    payer: {
      identification: { number: '32659430', type: 'DNI' },
      entity_type: null,
      phone: { number: null, extension: null, area_code: null },
      last_name: null,
      id: '1473282581',
      type: null,
      first_name: null,
      email: 'test_user_80507629@testuser.com'
    },

    payment_method: {
      data: { routing_data: [Object] },
      id: 'amex',
      issuer_id: '2',
      type: 'credit_card'
    },

    payment_method_id: 'amex',
    payment_type_id: 'credit_card',
    platform_id: null,

    point_of_interaction: {
      business_info: {
        branch: 'Merchant Services',
        sub_unit: 'checkout_pro',
        unit: 'online_payments'
      },
      transaction_data: { e2e_id: null },
      type: 'CHECKOUT'
    },
    
    pos_id: null,
    processing_mode: 'aggregator',
    refunds: [],
    shipping_amount: 0,
    sponsor_id: null,
    statement_descriptor: null,
    status: 'approved',
    status_detail: 'accredited',
    store_id: null,
    tags: null,
    taxes_amount: 0,
    transaction_amount: 269,
    transaction_amount_refunded: 0,
    transaction_details: {
      acquirer_reference: null,
      external_resource_url: null,
      financial_institution: null,
      installment_amount: 269,
      net_received_amount: 257.97,
      overpaid_amount: 0,
      payable_deferral_period: null,
      payment_method_reference_id: null,
      total_paid_amount: 269
    }
  }