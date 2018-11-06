define({"663":{i:0.00365045358752379,u:"../content/capabilities/development/queue/queue-task.htm",a:" The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task  "},"664":{i:0.000812505658509237,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-fe-be-shared.htm",a:" As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation   "},"665":{i:0.00151539716560092,u:"../content/capabilities/cart/calculation/calculation.htm",a:" Spryker Commerce OS uses the Calculation module to calculate the cart totals that are displayed in the cart/checkout or when the order is placed.\nIt\u0027s also used to recalculate the order totals after refund.\n The calculation module extensively uses plugins to inject calculation algorithms.\n How ...",t:"Calculation    "},"666":{i:0.000950533535179257,u:"../content/front-end_developer_guide/demoshop/twig_templates/twig-best-practices.htm",a:" Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates "},"667":{i:0.00587146240505508,u:"../content/capabilities/crm/mg-customer.htm",a:"   Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table ...",t:"Migration Guide - Customer  "},"668":{i:0.00367523247237127,u:"../content/capabilities/cms/cms_widget/available-widgets.html",a:" Currently there are four widgets provided by default in Spryker shop: Product (abstract), Product Set, Product Group and Product Search. They can be found in Administration Interface under Content Management-\u003ePage-\u003e Edit Placeholders-\u003e Content tab. The rules for widget creation are provided in Cms ...",t:"Available Widgets  "},"669":{i:0.000610709915230194,u:"../content/capabilities/product_management/product_relation/product-relation-types.htm",a:" In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids ...",t:"Product Relation Types    "},"670":{i:0.000610709915230194,u:"../content/capabilities/product_management/product_relation/product-relation-yves-datatastore.htm",a:" The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation    "},"671":{i:0.000918888650153909,u:"../content/capabilities/development/event/event-adding.htm",a:" When adding an event, make sure you first decide what kind of events you want to trigger in your code. Events are stored in a class for later use, by adding its literal string value (ModuleName.subject.action). This value uniquely identifies an event in the event module, and all listeners attached ...",t:"Adding Events  "},"672":{i:0.000588799495893628,u:"../content/capabilities/cart/minimum_order_value/minimum-order-value.htm",a:" MC Multi-currency ,  ML Multi-language ,  MS Multi-store Fulfilling small orders is not always worthwhile for the business, as operating costs, time and effort spent on processing such orders often overweight the profit gained. In such cases, implementing a minimum order value requirement might be ...",t:"Minimum Order Value  "},"673":{i:0.001136349005777,u:"../content/capabilities/cart/calculation/calculation-3-0.htm",a:" The latest version of this module can be found here  Calculation     Spryker uses the Calculation module to calculate the cart totals that are displayed in the cart/checkout or when the order is placed.\n\n The calculation module extensively uses plugins to inject calculation algorithms.\n How ...",t:"Calculation 3.0    "},"674":{i:0.000990874725210796,u:"../content/capabilities/development/mg-rabbitmq.htm",a:" Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module  Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: bindingQueue ...",t:"Migration Guide - RabbitMQ  "},"675":{i:0.000861123544789321,u:"../content/capabilities/search_and_filter/dynamic-filters-functionality.htm",a:" In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Dynamic Filters Functionality"},"676":{i:0.004418634972824,u:"../content/capabilities/order_management/state_machine/state-machine-cronjob.htm",a:" There are three console commands dedicated for the state machine: state-machine:check-condition - checks all the states that have a condition without event and triggers them. state-machine:check-timeout - check timeout expired items and triggers event for them. state-machine:clear-locks - clears ...",t:"Cron Jobs - State Machine    "},"677":{i:0.000795916236506122,u:"../content/capabilities/payment/dummy-payment.htm",a:" Do not use this code for production but you can use it as a starting point for new payment integrations. What is the DummyPayment for: it brings a simple state machine it shows how to integrate payment into the system it shows how to handle refunds it allows to test checkout process in several ways ...",t:"Dummy Payment    "},"678":{i:0.000603799177732527,u:"../content/capabilities/back_office/manage-customer-accounts.htm",a:" ML Multi-language Customer Accounts are the area of the Administration Interface where you can view and edit customer accounts, see details and check order history. From Customer Accounts you can group customers to target them for exclusive or limited offers.  How are Accounts Created?\n Customers ...",t:"Manage Customer Accounts"},"679":{i:0.00218086646659902,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector.htm",a:"Migration Guide - CMS Block Categor Connector  Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module ...",t:"Migration Guide - CMS Block Category Connector"},"680":{i:0.00322303382213319,u:"../content/capabilities/cart/calculation/mg-calculation.htm",a:" Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation    "},"681":{i:0.000701877853237124,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-implement-prepayment.htm",a:" Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment   "},"682":{i:0.000918888650153909,u:"../content/capabilities/development/event/event-priority.htm",a:" The Event Collector \\Spryker\\Service\\Event\\Dependency\\EventCollectionInterface uses a priority queue store events so each that event can have different priority and will be executed in correct order when triggered. For example: \u003c?php\n$eventCollection\n    ...",t:"Listener Priority  "},"683":{i:0.000701877853237124,u:"../content/capabilities/payment/how_to_implement_direct_debit/ht-implement-dd.htm",a:" This article describes the steps how to implement direct debit payment method without integrating with a third party payment service provider.\n For this example, we will add a new module called PaymentMethods.\n\n If it is your the first time creating a new module, check out the  tutorial on creating ...",t:"HowTo - Implement Direct Debit Payment   "},"684":{i:0.00314007005908588,u:"../content/capabilities/cms/cms_widget/cms-widget.htm",a:" With CMS content widgets we are bringing more power to CMS pages and blocks. You can easily include placeholders to display products, product groups and products sets in CMS pages and blocks. Multiple templates allow you to define which template is used per widget. So, you can for example apply ...",t:"CMS Widget   "},"685":{i:0.00422820382241705,u:"../content/capabilities/inventory_management/about-inventory.htm",a:" Inventory is the amount of products you offer to your customers. These products are catalogued and divided into items that are in stock and reserved. The stock value is the physical amount of products you have in your warehouse, whereas availability is an aggregated value per store which reflects ...",t:"Inventory    "},"686":{i:0.00054508117257707,u:"../content/capabilities/development/zed-request.htm",a:" This module is used to handle requests from Yves to Zed and the responses from Zed. Internally it makes use of the well known  Guzzle  library. HandlerStackContainer Guzzle provides a way to add a so called middleware. It makes use of a handler stack where you can push a middleware to. For more ...",t:"Zed Request  "},"687":{i:0.00732182372792126,u:"../content/capabilities/development/collector/collector-development.htm",a:" The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the Touch mechanism. Each collector ...",t:"Development - Collector "},"688":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-fe-implementation.htm",a:" Create a form\n In Yves, we start by building the form.  Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"Direct Debit Front-end Implementation   "},"689":{i:0.00054508117257707,u:"../content/capabilities/development/error-handler.htm",a:" The Spryker Commerce OS uses a dedicated error handling mechanism to collect detailed error related information. The ErrorHandler handles notices, warnings and other types of minor issues usually not thrown as exceptions as strict as more serious errors. By default, they all throw meaningful ...",t:"ErrorHandler    "},"690":{i:0.000950533535179257,u:"../content/capabilities/product_management/product_group/product-group-under-the-hood.htm",a:" Database Schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Product Group - Under The Hood    "},"691":{i:0.000603799177732527,u:"../content/capabilities/back_office/company-account-management.htm",a:" In a B2B world, your direct customers have a different need from an end-customer when it comes to ordering processes, permissions, and roles. Therefore, with the Spryker Commerce OS Company Account, the hierarchical structures and roles can easily be reflected. This enables your clients to fully ...",t:"Company Account Management"},"692":{i:0.00365045358752379,u:"../content/capabilities/development/queue/queue-job-config.htm",a:" You can also find the Worker configuration in jobs.php as part of the Demopshop  and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration  "},"693":{i:0.00054508117257707,u:"../content/capabilities/development/sequence-number.htm",a:" \n    Sometimes it should be ensured for a project that the just generated number is not used for the same purpose twice.\n    Spryker provides Sequence Number module which handles the unique number generation.\n General Usage The sequence number facade contains ::generate() method which provides a ...",t:"Sequence Number    "},"694":{i:0.00449016192151356,u:"../content/capabilities/development/queue/queue.htm",a:" Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar to a Mailbox, here you can store, send and receive messages.\n Introduction\n The Queue module provides ...",t:"Queue    "},"695":{i:0.00143371159211192,u:"../content/capabilities/search_and_filter/search-3-0.htm",a:" The latest version of this module can be found in  Search      section One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how ...",t:"Search 3.0"},"696":{i:0.000675315800917571,u:"../content/capabilities/product_management/product_options/product-options-1.htm",a:"   \n            Product options allow to configure a product further. You can define option types and each option type can have 1 to n option values.\n            Each option value has an associated price.\n             Example \n                    You want to sell a piece of artwork as a product ...",t:"Product Options - Version 1    "},"697":{i:0.000918888650153909,u:"../content/capabilities/development/event/event-asynch.htm",a:"Asynchronous Events  An asynchronous event can be created by using the addListenerQueued method instead of addListener. The difference is that it queues the event to be processed later by another process/consumer. You must have queue configured before using this feature, see bellow.",t:"Asynchronous Events  "},"698":{i:0.00077997900511439,u:"../content/capabilities/crm/user-rights-management.htm",a:" User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management    "},"699":{i:0.000812505658509237,u:"../content/capabilities/payment/how_to_implement_invoice_payment/ht-invoice-payment-be.htm",a:" Checkout Plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End   "},"700":{i:0.0034310782055146,u:"../content/capabilities/search_and_filter/search_query.htm",a:" Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query  "},"701":{i:0.000785374457834715,u:"../content/capabilities/development/event/event-configure-q.htm",a:" Implementation is already present in demoshop and all code samples can be found there. To implement an events queue: Click to expand the code sample \u003c?php\nnamespace Pyz\\Client\\RabbitMq;\n\nuse ArrayObject;\nuse Generated\\Shared\\Transfer\\RabbitMqOptionTransfer;\nuse ...",t:"Configuring an Events Queue  "},"702":{i:0.000925948248381735,u:"../content/capabilities/promotions_and_discounts/discount-excl-nonexcl.htm",a:"Exclusive and Non-Exclusive Discounts  Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"703":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-be-implementation.htm",a:" \nPersist payment details\nThe payment details for the direct debit payment method need to be persisted in the database. We’ll define a new table to store this data; inside the Persistence/Propel/Schema/ folder in Zed add the spy_directdebit_schema.xml file with the following content: \u003c?xml ...",t:"Direct Debit Back-End Implementation   "},"704":{i:0.000610709915230194,u:"../content/capabilities/product_management/product_relation/product-relation-db-entity-relation.htm",a:" spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product    "},"705":{i:0.00357140370140157,u:"../content/capabilities/development/flysystem.htm",a:" The Flysystem module integrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem    "},"706":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-fe.htm",a:" Creating the Form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End   "},"707":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-test-implementation.htm",a:"Testing the Direct Debit Implementation  Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"Testing the Direct Debit Implementation   "},"708":{i:0.00630173087681212,u:"../content/capabilities/crm/customer-module-overview.htm",a:" The Customer entity wraps data around registered customers. Customer data is managed from the Administration Interface by the shop administration and from the shop website itself by customers. This article describes how new customers can be created and managed and how to enable specific features ...",t:"Customer Module Overview  "},"709":{i:0.00203036696974954,u:"../content/capabilities/development/mg-touch.htm",a:" Upgrading from Version 3.* to Version 4.* Update/install spryker/touch to at least 4.0.0 version. Install the new database columns by running vendor/bin/console propel:diff. Propel should generate a migration file with the changes. Run vendor/bin/console propel:migrate to apply the database ...",t:"Migration Guide - Touch    "},"710":{i:0.000738796314282625,u:"../content/capabilities/master_suite_and_custom_suite/choosing-a-suite.htm",a:" The Sample Suite represents a standard shop, with common functionality and work-flows to show basic features. \nYou can use the Sample Suite as a boilerplate for your own shop and customize it for your products, CI and services.\nCustom Suites are individual versions of the OS that are tailored ...",t:"Choosing the Right Suite for You   "},"711":{i:0.000513801086699129,u:"../content/about_spryker/what_s_new/roadmap.htm",a:"Updated: September 3rd 2018\n We at Spryker are happy to share our plans with you. Our plans are guidelines that give us direction, that moves us forward to continuously evolve and improve our product. However, we are also flexible and we constantly listen and adapt. Therefore, our plans tend to ...",t:"Roadmap"},"712":{i:0.000921995962138656,u:"../content/capabilities/cms/cms_block/cms-block-product-connector.htm",a:" Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"713":{i:0.00898899376553465,u:"../content/capabilities/tax/tax-1-0.htm",a:" The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax Version 1.0  "},"714":{i:0.00054508117257707,u:"../content/capabilities/development/code-generator.htm",a:" The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator    "},"715":{i:0.00482044680862192,u:"../content/capabilities/checkout/checkout-steps.htm",a:" Entry Step Redirect customer to correct step based on QuoteTransfer state. This step requires input = false so it won’t be rendered. Customer Step The customer step provides three forms (login, register and register as a guest). This step is responsible for filling CustomerTransfer with ...",t:"Checkout Steps   "},"716":{i:0.000812109557215457,u:"../content/capabilities/development/event/event.htm",a:" The Event module implements an Observer pattern where you can add hooks (events) to your code and allow other modules to listen and react to those events.\n\n There are two methods:\n\n Traditional Synchronous where listeners are handled at the same time as they are dispatched\n Asynchronous (Queueable) ...",t:"Event"},"717":{i:0.00811170509553577,u:"../content/capabilities/order_management/sales/sales-5-0.htm",a:" The latest version of this module can be found here  Sales     Getting Totals for Order Spryker does not store order grand total or subtotal amounts; all amounts are stored before calculation, order items store single item gross amounts, discounts store single item discount amount. To get the ...",t:"Sales 5.0    "},"718":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-test.htm",a:"HowTo - Test Prepayment Implementation  Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation   "},"719":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_direct_debit/dd-checkout-implementation.htm",a:" The next step is to integrate direct debit into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the direct debit form and handler into the Checkout module: Click to expand the code sample \u003c?php\n\nnamespace ...",t:"Integrate Direct Debit into Checkout    "},"720":{i:0.004418634972824,u:"../content/capabilities/order_management/state_machine/state-machine-events.htm",a:" There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine    "},"721":{i:0.00102703224585957,u:"../content/capabilities/price/volume_prices/volume-prices-overview.htm",a:"In highly competitive markets, the business tactic is made compelling by issuing drastic discounts when buying products in large quantities or volumes. Volume pricing helps the merchants to gain the commitment of the customers. Providing volume discounts result in increasing the placement of large ...",t:"Volume Prices Feature Overview"},"722":{i:0.000633120772829513,u:"../content/capabilities/payment/how_to_implement_prepayment/ht-prepayment-be.htm",a:" To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End   "},"723":{i:0.00204304644272959,u:"../content/capabilities/search_and_filter/search.htm",a:" One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search    "},"724":{i:0.0119609852193183,u:"../content/capabilities/payment/refund/refund.htm",a:" Refund Refund manages the retour refund process. Overview RefundFacade contains the following methods: calculateRefund(array $salesOrderItems, SpySalesOrder $salesOrderEntity) calculates refundable amount for the sales order saveRefund(RefundTransfer $refundTransfer) persists the calculated refund ...",t:"Refund    "},"725":{i:0.00661052218055115,u:"../content/capabilities/cms/cms_block/mg-cms-block.htm",a:"Migration Guide - CMS Block  Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"726":{i:0.0012838810170738,u:"../content/capabilities/cms/mg-cms-collector.htm",a:" Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"727":{i:0.00248430687249383,u:"../content/capabilities/development/file_system/filesystem-api.htm",a:" Read API  getMetadata(FileSystemQueryTransfer $fileSystemQueryTransfer) Return FileSystemResourceMetadataTransfer, null on failure \u003c?php\n$fileSystemQueryTransfer = new ...",t:"File System API  "},"728":{i:0.00103029612191936,u:"../content/capabilities/cart/calculation/calculation-plugins.htm",a:" \nCalculator plugins are registered in the CalculationDependencyProvider::getQuoteCalculatorPluginStack() for QuoteTransfer and CalculationDependencyProvider::getOrderCalculatorPluginStack() or in later versions of the Calculation module 4.00 and above ...",t:"Calculator Plugins    "},"729":{i:0.00164513048137625,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector-console.htm",a:" Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console   "},"730":{i:0.0047760462503936,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"731":{i:0.000738796314282625,u:"../content/capabilities/checkout/payment-shipment-methods.htm",a:"ML Multi-language ,  MC Multi-currency The Spryker Commerce OS offers integrations with several payment and shipment providers that can be offered to the customers during the checkout process.\nThe selection of shipment methods can be arranged by carrier and availability. Payment methods can easily ...",t:"Payment and Shipment Methods"},});