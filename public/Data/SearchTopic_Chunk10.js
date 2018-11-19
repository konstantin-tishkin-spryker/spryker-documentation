define({"727":{i:0.00115707740127247,u:"../content/capabilities/crm/customer-module-overview.htm",a:" The Customer entity wraps data around registered customers. Customer data is managed from the Administration Interface by the shop administration and from the shop website itself by customers. This article describes how new customers can be created and managed and how to enable specific features ...",t:"Customer Module Overview  "},"728":{i:0.00378797678417043,u:"../content/capabilities/tax/tax-1-0.htm",a:" The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax Version 1.0  "},"729":{i:0.000480727180199162,u:"../content/capabilities/development/code-generator.htm",a:" The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator    "},"730":{i:0.00424908650792751,u:"../content/capabilities/checkout/checkout-steps.htm",a:" Entry Step Redirect customer to correct step based on QuoteTransfer state. This step requires input = false so it won’t be rendered. Customer Step The customer step provides three forms (login, register and register as a guest). This step is responsible for filling CustomerTransfer with ...",t:"Checkout Steps   "},"731":{i:0.000716242495428804,u:"../content/capabilities/development/event/event.htm",a:" The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other modules to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"732":{i:0.00378229631550878,u:"../content/capabilities/order_management/sales/sales-5-0.htm",a:" The latest version of this module can be found here  Sales     Getting Totals for Order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the ...",t:"Sales 5.0    "},"733":{i:0.000558368543382841,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-test.htm",a:"HowTo - Test Prepayment Implementation  Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation   "},"734":{i:0.000558368543382841,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-checkout-implementation.htm",a:" The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout    "},"735":{i:0.00389545912860439,u:"../content/capabilities/order_management/state_machine/state-machine-events.htm",a:" There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine    "},"736":{i:0.000905614712607209,u:"../content/capabilities/price/volume_prices/volume-prices-overview.htm",a:"In highly competitive markets, the business tactic is made compelling by issuing drastic discounts when buying products in large quantities or volumes. Volume pricing helps the merchants to gain the commitment of the customers. Providing volume discounts result in increasing the placement of large ...",t:"Volume Prices Feature Overview"},"737":{i:0.000558368543382841,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End   "},"738":{i:0.00199910970878506,u:"../content/capabilities/search_and_filter/search.htm",a:" One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search    "},"739":{i:0.00883547402430818,u:"../content/capabilities/payment/refund/refund.htm",a:" Refund Refund manages the retour refund process. Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates refundable amount for the sales order saveRefund(RefundTransfer $refundTransfer) persists the calculated refund ...",t:"Refund    "},"740":{i:0.00219043434025637,u:"../content/capabilities/development/file_system/filesystem-api.htm",a:" Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API  "},"741":{i:0.000563462039638879,u:"../content/capabilities/cart/calculation/calculation-plugins.htm",a:" \nCalculator plugins are registered in the CalculationDependencyProvider::getQuoteCalculatorPluginStack() for QuoteTransfer and CalculationDependencyProvider::getOrderCalculatorPluginStack() or in later versions of the Calculation module 4.00 and above ...",t:"Calculator Plugins    "},"742":{i:0.00421060371346198,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"743":{i:0.000651023050224797,u:"../content/capabilities/checkout/payment-shipment-methods.htm",a:"ML Multi-language ,  MC Multi-currency The Spryker Commerce OS offers integrations with several payment and shipment providers that can be offered to the customers during the checkout process.\nThe selection of shipment methods can be arranged by carrier and availability. Payment methods can easily ...",t:"Payment and Shipment Methods"},"744":{i:0.000480727180199162,u:"../content/capabilities/development/architecture-sniffer.htm",a:" We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Architecture Sniffer Tool"},"745":{i:0.0013776554870616,u:"../content/capabilities/shipment/shipment-overview.htm",a:" The main concepts regarding shipping that are modeled in the database are : shipment carrier shipment method The shipment method is linked to the sales order. The schema below shows how these entities are modeled in the database : A sales order has associated a shipment method. Each shipment method ...",t:"Shipment Overview  "},"746":{i:0.00367535318255124,u:"../content/capabilities/tax/tax-2-0.htm",a:" The latest version of this module can be found here  Tax Version 1.0   Spryker allows to define different tax sets that include one to many different tax rates. Tax Set - Tax Rate Association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : ...",t:"Tax Version 2.0   "},"747":{i:0.000558368543382841,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-shared.htm",a:" As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared   "},"748":{i:0.000922434565421399,u:"../content/capabilities/price/money.htm",a:" Money Handling monetary values can be a problem and is often quite hard. The Money bundle makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money  "},"749":{i:0.00410868322227396,u:"../content/capabilities/order_management/state_machine/state-machine-patterns.htm",a:" Process Patterns The State Machine Cook Book describes how to build a state machine with the elements state, transition and event. However there are some recurring design problems that are needed in many processes. In this article common problems and their solution with state machine snippets are ...",t:"State Machine Patterns    "},"750":{i:0.000618921813627853,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-implement-invoice-payment.htm",a:" Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment   "},"751":{i:0.000558368543382841,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-test.htm",a:"HowTo - Implement Invoice Payment - Test  When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test   "},"752":{i:0.000538596101652589,u:"../content/capabilities/product_management/product_relation/product-relation-query-builder.htm",a:" Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation    "},"753":{i:0.000557306104452518,u:"../content/industry_partners/payment/payone/v1_0/payone-v1-0.htm",a:" Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n Online Transfer Paypal ...",t:"Payment Integration - BS PayOne - 1.0"},"754":{i:0.000534874641425724,u:"../content/capabilities/development/zed_api/zed-api-config.htm",a:" First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration    "},"755":{i:0.000480727180199162,u:"../content/capabilities/development/logger.htm",a:" Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger    "},"756":{i:0.000793059290381833,u:"../content/capabilities/search_and_filter/search_preferences.htm",a:" ML Multi-language In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or ...",t:"Search Preferences  "},"757":{i:0.0025214806409904,u:"../content/capabilities/cms/cms_block/cms-block-multistore.htm",a:" MS Multi-store Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional ...",t:"Multi-store CMS Block   "},"758":{i:0.00268336187968903,u:"../content/capabilities/promotions_and_discounts/discount.htm",a:" Discount The Discount module is responsible for managing discounts in the Spryker OS. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the vouchers codes generated for each discount. You can ...",t:"Discount    "},"759":{i:0.00204176502715168,u:"../content/capabilities/cms/cms_page/content-fields-max-size.htm",a:"               By default CMS module doesn\u0027t specify the content field size.\n                Based on your DB (MySql or PostgreSql), it will be transferred to TEXT (65535 bytes) and TEXT (unlimited length) respectively.\n                In case your project requires more, you can redefine field size ...",t:"Defining Maximum Size of Content Fields   "},"760":{i:0.0025214806409904,u:"../content/capabilities/cms/cms_block/product-block.htm",a:"Product Block  MS Multi-store ,  ML Multi-language Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with ...",t:"CMS Block Product Connector"},"761":{i:0.00303982412419242,u:"../content/capabilities/development/queue/queue-msg-processor.htm",a:" Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin  "},"762":{i:0.000502617432845641,u:"../content/capabilities/product_management/product/product-recommendations.htm",a:"Product Recommendations  With the Product Recommendations feature you can show your customers similar or complementary items while browsing the store.",t:"Product Recommendations   "},"763":{i:0.000833317299843616,u:"../content/capabilities/promotions_and_discounts/discount-promotion.htm",a:" \n           For marketing reasons shops sometimes give away free products depending on the cart content. This could be for example when the cart value is high to give away some free perks.\n           Or for example when the customer buys certain product to give away some other product that is ...",t:"Discount Promotion    "},"764":{i:0.00320369824435611,u:"../content/capabilities/development/install-tool.htm",a:" Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool    "},"765":{i:0.00164619842461168,u:"../content/architecture_concepts/publish-and-synchronization/publish-and-synchronization.htm",a:" For faster access to data, the client (Shop App) uses a key-value storage, Redis, and a search engine, Elasticsearch, as data sources. It does not have direct access to the  SQL database  used by the backend. To have the client data sources always up to date, all changes made on the backend need to ...",t:"Publish and Synchronization"},"766":{i:0.000480727180199162,u:"../content/capabilities/development/data-feed.htm",a:" BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed module helps to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules    "},"767":{i:0.000833317299843616,u:"../content/capabilities/promotions_and_discounts/discount-ext-module.htm",a:"The main components that describe a discount are: discount collector: Specifies for which items discount is being applied/calculated. Example: The discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"768":{i:0.000480727180199162,u:"../content/capabilities/development/code-sniffer.htm",a:" To correspond to  PSR-2 standards , we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer. Code Sniffer is a very powerful tool that helps to keep the code clean and prevent simple mistakes. The sniffer can find all the issues, and can also auto-fix most of them (when used with -f ...",t:"Code Sniffer"},"769":{i:0.00605482449240278,u:"../content/capabilities/mailing_and_notifications/mail-create-provider-plugin.htm",a:" The provider class is used to define the Mail Provider you want to use. As each provider behaves differently the provider class will also look different accordingly. Create a class which implements MailProviderPluginInterface. After that register your provider in the Mail module. Register the Mail ...",t:"Create a MailProviderPlugin  "},"770":{i:0.000480727180199162,u:"../content/capabilities/development/installer.htm",a:" ML Multi-language ,  MS Multi-store ,  MC Multi-currency The Installer module is responsible of managing the installment process of required database data  in any environment. Plugin Stack You define the installer plugins of the bundles you want to include in the Pyz ImporterDependencyProvider: ...",t:"Installer    "},"771":{i:0.000836461928530717,u:"../content/capabilities/checkout/checkout-functionality.htm",a:" Yves Step Processing Checkout in Spryker  demoshop  uses a StepEngine step process to navigate customer step by step through checkout. The checkout process creates a generic approach for step processing; each step knows how to handle the form data, where it has to store data and which conditions ...",t:"Checkout StepEngine   "},"772":{i:0.000570470311644792,u:"../content/capabilities/internationalization/glossary/glossary-how-translations-managed.htm",a:" The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed    "},"773":{i:0.000645742097534852,u:"../content/capabilities/sample_suite_and_custom_suite/choosing-a-suite.htm",a:" The Sample Suite represents a standard shop, with common functionality and work-flows to show basic features. \nYou can use the Sample Suite as a boilerplate for your own shop and customize it for your products, CI and services.\nCustom Suites are individual versions of the OS that are tailored ...",t:"Choosing the Right Suite for You   "},"774":{i:0.00303982412419242,u:"../content/capabilities/development/queue/queue-adapter.htm",a:"Default Queue Adapter  Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter   "},"775":{i:0.000480727180199162,u:"../content/capabilities/development/modules.htm",a:" A module is a group of files (PHP classes, test classes, configuration files, CSS files, etc) that refer to one concept and it’s written in a way that it makes it usable by other modules. Modules can be logically divided into categories where some are mandatory and necessary for running the OS and ...",t:"Module Guide    "},});