define({"592":{i:0.00058068954998002,u:"../content/industry_partners/payment/billpay/billpay.htm",a:"Payment Integration - Billpay (BETA) BETA version\n This (Undefined variable: General.bundle/module) is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Billpay"},"593":{i:0.000564153960966466,u:"../content/industry_partners/payment/billpay/billpay_payment_methods.htm",a:" Refer to Billpay payment information ( https://www.billpay.de/en/business-clients/payment-information/ ) for information about payment methods. The identity and credit check are checked within a single \"pre-authorize\" call after summary page was submitted.\n           This may lead to the ...",t:"Billpay - Invoice Payment in Preauthorize Mode"},"594":{i:0.000564153960966466,u:"../content/industry_partners/payment/billpay/billpay-integration.htm",a:" Billpay offers multiple payment methods (Invoice, Direct Debit, PayLater, Instalment). Availability of payment methods differs from country to country. Please contact Billpay directly or visit the Billpay website ( https://www.billpay.de/en/business-clients/merchant-request/ ) for details. The ...",t:"Billpay - Integration"},"595":{i:0.00058068954998002,u:"../content/industry_partners/payment/braintree/braintree.htm",a:"(BETA)  Braintree provides two methods of payment: Credit Card PayPal In order to integrate Braintree payments, a Braintree merchant account should be created and configuration data then could be obtained from Braintree. There are two types of accounts for the integration: test accounts live ...",t:"Payment Integration — Braintree"},"596":{i:0.000564153960966466,u:"../content/industry_partners/payment/braintree/braintree-configuration.htm",a:" \n    Add spryker-eco/braintree to your project by running composer require spryker-eco/braintree \n    Please refer to config/config.dist.php for example of module configuration.\n To setup the initial Braintree configuration, use the credentials you received after registering your Braintree merchant ...",t:"Braintree — Configuration  "},"597":{i:0.000564153960966466,u:"../content/industry_partners/payment/braintree/braintree-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Braintree State Machine Commands and Conditions ...",t:"Braintree — Performing Requests  "},"598":{i:0.000564153960966466,u:"../content/industry_partners/payment/braintree/braintree-workflow.htm",a:" Both credit card and PayPal utilize the same request flow. It basically consists of the following requests: Pre-check: to check the user information in order to make sure that all the needed information is correct before doing the actual pre-authorization. Authorize: to perform a payment risk check ...",t:"Braintree — Workflow  "},"599":{i:0.00058068954998002,u:"../content/industry_partners/payment/computop/computop.htm",a:" Partner Information \n            We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n         \n            Implementation details:\n         API details OMS details \n            ...",t:"Payment Integration - Computop"},"600":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-api-details.htm",a:"Computop API  Authorization Call: \n        Authorize money.\n     \n        There is no partial authorization. Please make one API call to make authorization for all items in the order.\n     \n        It is not possible to Authorize a higher amount than in the ORDER.\n     Inquire Call: Status inquiries ...",t:"Computop - API details"},"601":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-credit-card.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/credit_card.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Credit Card  "},"602":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-direct-debit.htm",a:" Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/direct_debit.twig\n     State Machine Integration The Computop provides a demo state ...",t:"Computop - Direct Debit  "},"603":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-easy-credit.htm",a:" Computop - Easy Credit  Example State Machine Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/easy_credit.twig\n     State Machine Integration The Computop ...",t:" Computop - Easy Credit  "},"604":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-ideal.htm",a:" The iDeal issuer simulation is not working anymore and therefore testing on  sandbox is currently not possible. We have sent a question to Computop about additional API call. Waiting for the answer. Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the ...",t:"Computop - iDeal  "},"605":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-oms-details.htm",a:" The following plugins are used for performing calls to Paygate during OMS operation. Authorize Plugin: \n        Make an Authorize call to Computop.\n     Cancel Plugin: Follow these steps to cancel the item in the order in case all the items or the last possible one got canceled: Inquire a call to ...",t:"Computop - OMS  "},"606":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-paydirekt.htm",a:" Computop - Paydirekt  Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paydirekt.twig\n     State Machine Integration The Computop ...",t:" Computop - Paydirekt  "},"607":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-paynow.htm",a:" Example State Machine Front-end Integration To adjust the frontend appearance, provide the following templates in your theme directory:  src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paynow.twig . State Machine Integration The Computop provides a demo state machine for the PayNow ...",t:"Computop - PayNow"},"608":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-paypal.htm",a:" Computop - PayPal  Example State Machine Front-end Integration \n    To adjust frontend appearance, provide following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/paypal.twig\n     State Machine Integration The Computop provides a demo state ...",t:" Computop - PayPal  "},"609":{i:0.000564153960966466,u:"../content/industry_partners/payment/computop/computop-sofort.htm",a:" Example State Machine: Front-end Integration \n    To adjust the frontend appearance, provide the following templates in your theme directory:\n \n        src/\u003cproject_name\u003e/Yves/Computop/Theme/\u003ccustom_theme_name\u003e/sofort.twig\n     State Machine Integration The Computop provides a demo state machine ...",t:"Computop - Sofort  "},"610":{i:0.00058068954998002,u:"../content/industry_partners/payment/heidelpay/heidelpay.htm",a:" Partner Information Integrating Heidelpay To integrate Hidelpay in your project, follow these steps: Install  Heidelpay Integrate  Heidelpay to your project \tConfigure selected payment methods: Paypal ( Paypal Authorize ,  Payal Debit ) Credit Card iDeal Build your own workflow (create a new OMS ...",t:"Payment Integration - Heidelpay"},"611":{i:0.000646418523725982,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-installation.htm",a:" To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and simply do \u003e composer require spryker-eco/heidelpay   See also: Payment ...",t:"Heidelpay - Installation  "},"612":{i:0.000646418523725982,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-integration.htm",a:"Heidelpay - Integration to Your Project\n Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n        The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n "},"613":{i:0.000646418523725982,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-authorize.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taked from ...",t:"Heidelpay - Paypal Authorize  "},"614":{i:0.00430919862554317,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-credit-card.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = ...",t:"Heidelpay - Credit Card Secure  "},"615":{i:0.000646418523725982,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-paypal-debit.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taken from ...",t:"Heidelpay - Paypal Debit Workflow  "},"616":{i:0.000564153960966466,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-error-workflow.htm",a:"Heidelpay - Workflow for Errors\n \n        From the user\u0027s perspective, there is almost no difference between successful and unsuccessful order flow. The only exception is a redirect to the URL after the placeOrderAction (/checkout/place-order) is complete.\n        Both urls can be configured as ...",t:"Heidelpay - Workflow for Errors\n     "},"617":{i:0.000564153960966466,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-sofort.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027;\n \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)  "},"618":{i:0.000646418523725982,u:"../content/industry_partners/payment/heidelpay/v1_0/heidelpay-ideal.htm",a:" Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027;\n This value should be taken from ...",t:"Hedelpay - iDeal  "},"619":{i:0.00058068954998002,u:"../content/industry_partners/payment/klarna/klarna.htm",a:" BETA version\n This (Undefined variable: General.bundle/module) is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Klarna Invoice The option to pay after delivery makes buying quicker and easier for customers. With Klarna’s Pay Later, ...",t:"Payment Integration  - Klarna"},"620":{i:0.00058068954998002,u:"../content/industry_partners/payment/payolution/payolution.htm",a:" BETA version\n This (Undefined variable: General.bundle/module) is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution ...",t:"Payment Integration — Payolution"},"621":{i:0.000564153960966466,u:"../content/industry_partners/payment/payolution/payolution-configuration.htm",a:" \n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution — Configuration  "},"622":{i:0.000564153960966466,u:"../content/industry_partners/payment/payolution/payolution-installment.htm",a:" Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution — Installment Payment  "},"623":{i:0.000564153960966466,u:"../content/industry_partners/payment/payolution/payolution-invoice.htm",a:" Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Standard Case Full Refund Before Payment Partial Refund Before Payment Full Refund After Payment Partial Refund After Payment Integrating ...",t:"Payolution — Invoice Payment  "},"624":{i:0.000564153960966466,u:"../content/industry_partners/payment/payolution/payolution-requests.htm",a:" In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and ...",t:"Payolution — Performing Requests  "},"625":{i:0.000564153960966466,u:"../content/industry_partners/payment/payolution/payolution-workflow.htm",a:" Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution — Workflow  "},"626":{i:0.00058068954998002,u:"../content/industry_partners/payment/payone/v1_1/payone-v1-1.htm",a:"- 1.1  Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n     Online Transfer ...",t:"Payment Integration - BS PayOne"},"627":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_1/payone-integration-with-project-example.htm",a:" Objectives: Place order with PayPal express checkout. Be redirected to summary page of standard checkout. Have shipping a method selector on summary page. First of all we need to provide a URL to Payone module, which will be used to redirect user when the quote is filled with data obtained from ...",t:"PayOne - Integration With Project"},"628":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-state-machine-cmd-cond-evnt.htm",a:"PayOne - State Machine Commands, Conditions and Events ",t:"PayOne - State Machine Commands, Conditions and Events"},"629":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-authorization-and-preauthorization-capture-flows.htm",a:" Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"PayOne - Authorization and Preauthorization-Capture Flows"},"630":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-facade.htm",a:"PayOne - Facade   ",t:"PayOne - Facade"},"631":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-direct-debit.htm",a:"Payone - Direct Debit Payment  Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"PayOne - Direct Debit Payment"},"632":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-invoice.htm",a:" Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"PayOne - Invoice Payment"},"633":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-paypal.htm",a:" PayOne - Paypal Payment  The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on ...",t:"PayOne - Paypal Payment"},"634":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-credit-card.htm",a:" PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"PayOne - Credit Card Payment"},"635":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-prepayment.htm",a:"Payone - Pre-payment  Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the ...",t:"PayOne - Prepayment"},"636":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_0/payone-online-trans.htm",a:" Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL, Przelewy24, and Bancontact. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method ...",t:"PayOne - Online Transfer Payment"},"637":{i:0.000564153960966466,u:"../content/industry_partners/payment/payone/v1_1/payone-paypal-express-checkout.htm",a:" The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayOne - PayPal Express Checkout Payment"},"638":{i:0.00058068954998002,u:"../content/industry_partners/payment/ratepay/ratepay.htm",a:"Payment Integration - RatePAY  Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice ...",t:"Payment Integration - Ratepay"},"639":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-direct-debit.htm",a:"(ELV)  Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct ...",t:"RatePAY - Direct Debit"},"640":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-disable-address-updates.htm",a:" To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"RatePAY - How to Disable Address Updates from the Backend Application"},"641":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-facade.htm",a:"RatePAY - Facade\n",t:"RatePAY - Facade"},"642":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-installment.htm",a:" The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the ...",t:"RatePAY - Installment"},"643":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-invoice.htm",a:" Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"RatePAY - Invoice"},"644":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-payment-workflow.htm",a:" RatePAY - Payment Workflow  Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a ...",t:"RatePAY - Payment Workflow"},"645":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-prepayment.htm",a:" Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"RatePAY - Prepayment"},"646":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-state-machine.htm",a:" Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY - State Machine Commands and Conditions"},"647":{i:0.000564153960966466,u:"../content/industry_partners/payment/ratepay/ratepay-structure-diag.htm",a:"RatePAY- Core Module Structure Diagram  The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY- Core Module Structure Diagram"},"648":{i:0.00058068954998002,u:"../content/industry_partners/performance/akeneo/product-management-akeneo.htm",a:" Partner Information Installation To install AkeneoPim add the AkeneoPimMiddlewareConnector run this command in the console: composer require spryker-eco/akeneo-pim-middleware-connector:1.0.0   See also: Join us at Internet World Expo! Configure Akeneo module Integrate Akeneo module Learn about ...",t:"Product Information Management - Akeneo"},"649":{i:0.000564153960966466,u:"../content/industry_partners/performance/akeneo/akeneo-milti-select-attributes.htm",a:" The Akeneo attribute pim_catalog_multiselect will be imported as the concatenated string. The following attribute types from Akeneo will be skipped and not imported: pim_assets_collection pim_reference_data_multiselect pim_catalog_price_collection At the project level, you can change ...",t:"Akeneo - Multi-select Attributes"},"650":{i:0.000564153960966466,u:"../content/industry_partners/performance/akeneo/akeneo-integration.htm",a:" Add Middleware Process console command to ConsoleDependencyProvider in your project: \n\t…\n\tuse SprykerMiddleware\\Zed\\Process\\Communication\\Console\\ProcessConsole;\n\t…\n\tprotected function getConsoleCommands(Container $container)\n\t{\n\t\t$commands = [\n\t\t\t… \n\t\t\tnew ProcessConsole(),\n\t\t];\n\t\t…\n\t\treturn ...",t:"Akeneo - Integration"},"651":{i:0.000564153960966466,u:"../content/industry_partners/performance/akeneo/akeneo-configuration.htm",a:" Add SprykerMiddleware to your project’s core namespaces: \n\t$config[KernelConstants::CORE_NAMESPACES] = [\n\t\t\u0027SprykerShop\u0027,\n\t\t\u0027SprykerMiddleware\u0027,\n\t\t\u0027SprykerEco\u0027,\n\t\t\u0027Spryker\u0027,\n\t]; To set up the Akeneo initial configuration, use the credentials you received from your PIM: ...",t:"Akeneo - Configuration"},"652":{i:0.00058068954998002,u:"../content/industry_partners/performance/econda/monitoring-econda.htm",a:" Partner Information Prerequisites  Our Econda module offers the integration with these services for the application you are building using Spryker. To integrate with Econda, you will need to connect your Econda account. If you do not have an Econda account please contact  Econda Sales .\n\n To enable ...",t:"Performance Monitoring - Econda"},"653":{i:0.000564153960966466,u:"../content/industry_partners/performance/econda/monitoring-econda-cross-sell.htm",a:" Cross sell is highly customizable and it depends on your setup. Please refer to  Econda offical documentation . All necessary JS files are already integrated into the module, the only thing you need to do is to add your API key inside the econda_crosssell.twig template: \u003cinput type=\"hidden\" ...",t:"Econda - Cross Sell"},"654":{i:0.000564153960966466,u:"../content/industry_partners/performance/econda/monitoring-econda-export-csvs.htm",a:" To implement Econda plugin you should be familiar with the concept of  extending Spryker  and  plugins. Zed Output Folder We need to define the output folder where the generated CSV files will be saved. This is done by adding a line in your config. config [EcondaConstants::CSV_FOLDER_PATH] = ...",t:"Econda - Exporting CSVs"},"655":{i:0.000564153960966466,u:"../content/industry_partners/performance/econda/monitoring-econda-tracking.htm",a:" Now that we have integrated Econda to the website we can start adding the tracking code. Prerequisites\n To add tracking, you should also be familiar with  Twig. To enable Econda tracking for your application, you need to add econda_tracker.twig to the proper page template, for example: \n\t\u0027content\u0027: ...",t:"Econda - Tracking"},"656":{i:0.00058068954998002,u:"../content/industry_partners/performance/factfinder/search-factfinder.htm",a:"Search Integration - FACT-Finder  Partner Information Prerequisites\n\n\t\t To integrate with FACT-Finder, you will need your FACT-Finder account. If you do not have a FACT-Finder account, please contact  FACT-Finder .\n Installation\n\t\t \n\t\t\tComposer dependency:\n\n\t\t To install Spryker\u0027s FactFinder module, ...",t:"Search Integration - Fact Finder"},"657":{i:0.000564153960966466,u:"../content/industry_partners/performance/factfinder/search-factfinder-campaigns.htm",a:" Prerequisites \n            The FACT-Finder Campaign Manager module allows you to target the management of search results in order to improve the customer lead process or deliberately highlight products.\n            Campaigns are activated according to the specific criteria and are then returned ...",t:"FACT-Finder - Campaigns  "},"658":{i:0.000564153960966466,u:"../content/industry_partners/performance/factfinder/search-factfinder-export-csv.htm",a:" Output Folder  Define an output folder where  the CSV files will be generated by adding the following line in your configuration file: \u003c?php\n$config[FactFinderSdkConstants::CSV_DIRECTORY] = APPLICATION_ROOT_DIR . \u0027/path/to/generated/csv/files\u0027; Zed must have Read / Write access to this folder ...",t:"FACT-Finder - Exporting CSVs"},"659":{i:0.000564153960966466,u:"../content/industry_partners/performance/factfinder/search-factfinder-recommendation.htm",a:" Prerequisites  The FACT-Finder recommendation engine analyzes product and category relationships. The results are rendered in recommendations widget, which can be displayed on product details pages, homepage or in the shopping cart. Usage   To add recommendations widget to product page, insert the ...",t:"FACT-Finder - Recommendation  "},});