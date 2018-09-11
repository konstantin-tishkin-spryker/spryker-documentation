define({"143":{i:0.000728850411427927,u:"../content/capabilities/cart/cart-functionality-calculations.htm",a:" The extensive Cart allows your customers to add products to  their Cart by simply selecting the desired quantity. Inside the Cart, customers can change the quantity of items, switch between different Variants of the product, add personal notes, apply vouchers and remove items. The total price is ...",t:"Cart Functionality and Calculations    "},"144":{i:0.00159997069309054,u:"../content/capabilities/cart/cart-functionality.htm",a:" Our Cart consists of a few components in Yves and Zed. The Yves components  create the cart requests and persist the cart into the session. The Zed components  persist the data into the database and expand the items with data obtained from plugins. Cart operations are invoked in CartClient, which ...",t:"Cart Functionality  "},"145":{i:0.000728850411427927,u:"../content/capabilities/cart/cart-rules-discounts.htm",a:" With Cart Rules and Discounts you can  create special rules and apply them to cart content, such as cart value thresholds or specific items in the cart.\n Give your customers special cart-based discounts to boost sales. The Cart Rule query builder allows you to create special rules and apply them to ...",t:"Cart Rules and Discounts    "},"146":{i:0.000873916216384447,u:"../content/capabilities/cart/cart_-integration.htm",a:" This article describes how to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker Super Attributes.  UI Changes: Cart now supports changing the items in the cart by modifying their attributes. If we have ...",t:"Cart Integration "},"147":{i:0.0051315733148969,u:"../content/capabilities/cart/mg-cart.htm",a:" Upgrading from Version 4.* to Version 5.* With the implementation of the quote storage strategies, the new version of the Cart module allows to use different behaviors for different strategies. Since QuoteClient::getStorageStrategy method is used now, the Quote module\u0027s version must be 2.0.0 or ...",t:"Migration Guide - Cart "},"148":{i:0.000728850411427927,u:"../content/capabilities/cart/multiple-cart-per-user.htm",a:"Multiple Carts Per User  Each customer can have more than one cart and even keep the carts after the checkout. The different carts can be named and are linked to the User Account.\n - Multiple named carts per customer\n - Keep cart after checkout If you are a:",t:"Multiple Carts Per User  "},"149":{i:0.000564153960966466,u:"../content/capabilities/cart/quick-add-to-cart.htm",a:" With the Quick Add to Cart option users are enabled to add products via their SKU number to the cart. In a designated field, the SKU and desired quantity can be manually entered to add the item to the cart with one click or directly create an order. For bulk-adding, a defined text area is used to ...",t:"Quick Add to Cart  "},"150":{i:0.000564153960966466,u:"../content/capabilities/cart/shared-cart.htm",a:" Enable your business customers to collaborate within their Business Units. By using a Company Account, they can share a cart with other users of the same business unit. Depending on a user\u0027s permission, differnet tasks can be perfomed in a shared cart.\nEach Business Unit user can have either a read ...",t:"Shared Cart  "},"151":{i:0.000581280106730504,u:"../content/capabilities/catalog_management/catalog-management.htm",a:"Catalog Management ",t:"Catalog Management    "},"152":{i:0.000687676298812562,u:"../content/capabilities/catalog_management/category-hierarchy.htm",a:" The Category Tree function, helps you to build a nested category structure, to establish a hierarchy for your products . Nested categories are used in  shops to seamlessly create navigation that is based on your catalog to refine your display to specific smaller sub-sets of specific items. If you ...",t:"Category Hierarchy   "},"153":{i:0.000687676298812562,u:"../content/capabilities/catalog_management/category-management.htm",a:" Manage your product catalog with customized categories, category pages and filters to easily handle and sort your items.\nAll products can be categorized into logical clusters, so that your customers can filter them in your shop. Easily define if categories should be searchable or hidden and thus ...",t:"Category Management   "},"154":{i:0.000564153960966466,u:"../content/capabilities/catalog_management/mg-catalog.htm",a:" Upgrading from Version 3.* to Version 4.*\n Due to introducing the Suggestion Search feature, the Catalog bundle now requires Search \u003e=5.2.\n\n To upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description ...",t:"Migration Guide - Catalog   "},"155":{i:0.000687676298812562,u:"../content/capabilities/catalog_management/product-catalog-management.htm",a:" Building a Product Catalog is more than just creating a list of the products you sell. To make items appealing for your customers they need to be enriched with descriptions and images, pricing details and product options. This information also makes filtering and categorizing easier and your ...",t:"Product Catalog Management  "},"156":{i:0.000687676298812562,u:"../content/capabilities/catalog_management/product-to-category-assotiation.htm",a:"Product to Category Association  You can manually assign products to a category or simply import product-category associations from external sources. Each product can be listed in different categories and the same category can appear multiple times in the category tree. If you are a:",t:"Product to Category Association  "},"157":{i:0.000581280106730504,u:"../content/capabilities/checkout/checkout.htm",a:"Checkout ",t:"Checkout    "},"158":{i:0.000668768095471386,u:"../content/capabilities/checkout/checkout-form-submission.htm",a:" On form submission, the same processing starts with the difference that if form submit is detected then the validation is called: if the form is invalid then view will be rendered with validation errors if form data is valid, then execute() is called on step that executes the step related logic. ...",t:"Checkout Form Submission    "},"159":{i:0.000984600854837573,u:"../content/capabilities/checkout/checkout-functionality.htm",a:" Yves Step Processing Checkout in Spryker  demoshop  uses a StepEngine step process to navigate customer step by step through checkout. The checkout process creates a generic approach for step processing; each step knows how to handle the form data, where it has to store data and which conditions ...",t:"Checkout Functionality   "},"160":{i:0.000668768095471386,u:"../content/capabilities/checkout/checkout-how-quote-trans-mapped.htm",a:" Symfony forms provide a mechanism to store data into objects without having the need of a manual mapping. It’s called  Data transformers . There are a few important things to make this work. Because we are passing the entire QuoteTransfer, the form handler does not know which fields are you trying ...",t:"How the Quote Transfer is Mapped Inside Forms - Checkout   "},"161":{i:0.000764674511750003,u:"../content/capabilities/checkout/checkout-how-wired.htm",a:" In order to use checkout in Yves it should be correctly configured and dependencies should be provided. Each step can have a form, a controller action, the implementation of the step logic and Twig template to render the HTML. Forms - current step form collection. Controller action - the action ...",t:"How Things are Wired Together - Checkout   "},"162":{i:0.00824105326659785,u:"../content/capabilities/checkout/checkout-placing-the-order.htm",a:" After the customer clicks the submit button during the SummaryStep, the PlaceOrderStep is started. This step takes the QuoteTransfer` and starts the checkout workflow to store the order into the system. Zed Checkout module contains a number of plugins where you can add additional behavior, check ...",t:"Placing the Order — Checkout   "},"163":{i:0.000564153960966466,u:"../content/capabilities/checkout/checkout-process.htm",a:" The following modules are used to establish cart, checkout and sales functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate ...",t:"Cart \u0026 Checkout \u0026 Sales   "},"164":{i:0.000764674511750003,u:"../content/capabilities/checkout/checkout-quot-trans-lifetime.htm",a:" When a process is being called on StepProcess, it will try to get the current valid step by walking through the step stack and calling the postCondition() for each, starting from the first in the stack. If postCondition() is being called on StepProcess, it will try to get the current valid step by ...",t:"Checkout Quote Transfer Lifetime   "},"165":{i:0.000668768095471386,u:"../content/capabilities/checkout/checkout-step-ext-red-interface.htm",a:"  #\n  \u003c?php\n  interface StepWithExternalRedirectInterface extends StepInterface\n  {\n\t/**\n\t * Return external redirect url, when redirect occurs not within same application. Used after execute.\n\t *\n\t * @return string\n\t */\n\tpublic function getExternalRedirectUrl();\n  }",t:"Step with External Redirect Interface - Checkout   "},"166":{i:0.000668768095471386,u:"../content/capabilities/checkout/checkout-step-interface.htm",a:"  #\n  \u003c?php\n  interface StepInterface\n  {\n\t/**\n\t * Requirements for this step, return true when satisfied.\n\t *\n\t * @param QuoteTransfer $quoteTransfer\n\t *\n\t * @return bool\n\t */\n\tpublic function preCondition(QuoteTransfer $quoteTransfer);\n\t/**\n\t * Require input, should we render view with form or ...",t:"Checkout Step Interface   "},"167":{i:0.00509751137902395,u:"../content/capabilities/checkout/checkout-steps.htm",a:" Entry Step Redirect customer to correct step based on QuoteTransfer state. This step requires input = false so it won’t be rendered. Customer Step The customer step provides three forms (login, register and register as a guest). This step is responsible for filling CustomerTransfer with ...",t:"Checkout Steps   "},"168":{i:0.000564153960966466,u:"../content/capabilities/checkout/mg-checkout.htm",a:" Upgrading from Version 3.* to Version 4.* \n            If you extended \\Spryker\\Zed\\Checkout\\Dependency\\Plugin\\CheckoutPreConditionInterface: find those\n            plugins and make sure they return boolean. Important: you can return true even if a plugin adds errors\n            to the checkout ...",t:"Migration Guide - Checkout   "},"169":{i:0.000728850411427927,u:"../content/capabilities/checkout/multi-step-checkout.htm",a:"The Checkout workflow is a multi-step process that can be fully customized to fit your needs. The standard steps included are: customer registration and login, shipping and billing address, shipment method and costs, payment method, checkout overview and checkout success. \nYou can easily design the ...",t:"Multi-Step Checkout"},"170":{i:0.000728850411427927,u:"../content/capabilities/checkout/payment-shipment-definition.htm",a:"The Spryker Commerce OS offers integrations with several payment and shipment providers that can be offered to the customers during the checkout process.\nThe selection of shipment methods can be arranged by carrier and availability. Payment methods can easily be customized to your business needs.\n",t:"Payment and Shipment Method Definition"},"171":{i:0.000581280106730504,u:"../content/capabilities/cms/cms.htm",a:"CMS (Content Management) ",t:"CMS (Content Management)    "},"172":{i:0.00351065757439991,u:"../content/capabilities/cms/cms_block/cms-block.htm",a:" Embed custom blocks of content into your shop. Blocks come with full management and control capabilities. You can easily add promotional banners and define validity date ranges to emphasize specific, time limited content. You can create connections to other objects (e.g. Customer Groups (show a ...",t:"CMS Block   "},"173":{i:0.00256154470223221,u:"../content/capabilities/cms/cms_block/cms-block-category-connector.htm",a:" Category Blocks Category blocks are blocks that can be embedded into the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. We want to apply the ...",t:"CMS Block Category Connector"},"174":{i:0.00672969386809409,u:"../content/capabilities/cms/cms_block/cms-block-multistore.htm",a:" Overview The multi-store CMS block feature enables you to manage CMS blocks display per stores through a store toggle element on CMS Block management pages in the Administration Interface. By default CMS Blocks are available in all stores. This feature provides additional configuration when you ...",t:"Multi-store CMS Block   "},"175":{i:0.00171625309368481,u:"../content/capabilities/cms/cms_block/cms-block-product-connector.htm",a:" Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"176":{i:0.00286584848707923,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector-console.htm",a:" Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console   "},"177":{i:0.00369656923126248,u:"../content/capabilities/cms/cms_block/mg-cms-block-category-connector.htm",a:"Migration Guide - CMS Block Categor Connector  Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module ...",t:"Migration Guide - CMS Block Category Connector"},"178":{i:0.00638207917982637,u:"../content/capabilities/cms/cms_block/mg-cms-block-collector.htm",a:"Migration Guide - CMS Block Collector  Upgrading from Version 1.* to Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional ...",t:"Migration Guide - CMS Collector"},"179":{i:0.00640872962096824,u:"../content/capabilities/cms/cms_block/mg-cms-block-gui.htm",a:" Upgrading from Version 1.* to Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},"180":{i:0.00649843173565866,u:"../content/capabilities/cms/cms_block/mg-cms-block.htm",a:"Migration Guide - CMS Block  Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"181":{i:0.00160659442548935,u:"../content/capabilities/cms/cms_page/cms-page.htm",a:" Power up your online shop with customized content you can create and publish using CMS Pages. This feature is ideal for specific landing pages with dedicated URLs to promote content and products, i.e. for marketing campaigns.\nA content creation workflow supports all the stages of content creation ...",t:"CMS Page    "},"182":{i:0.00101935746236547,u:"../content/capabilities/cms/cms_page/cms-extension-points.htm",a:" \nThe CMS module provides an extension point for post activation and deactivation of CMS pages. The plugin interface set for this extension point is as follows:\n \nnamespace Spryker\\Zed\\Cms\\Communication\\Plugin;\n\nuse Generated\\Shared\\Transfer\\CmsPageTransfer;\n\ninterface ...",t:"CMS Extension Points   "},"183":{i:0.00159888860207744,u:"../content/capabilities/cms/cms_page/cms-preview-draft-page.htm",a:" Overview With the CMS draft feature the shop administrator can create drafts of CMS pages without affecting the current live version of the page. It is possible to preview draft version of content before publishing it to see how the page will look like when it is live. This article will tell you ...",t:"Preview Draft Page   "},"184":{i:0.00171550377488367,u:"../content/capabilities/cms/cms_page/content-fields-max-size.htm",a:"               By default CMS module doesn\u0027t specify the content field size.\n                Based on your DB (MySql or PostgreSql), it will be transferred to TEXT (65535 bytes) and TEXT (unlimited length) respectively.\n                In case your project requires more, you can redefine field size ...",t:"Defining Maximum Size of Content Fields   "},"185":{i:0.00286788785555595,u:"../content/capabilities/cms/cms_widget/cms-widget.htm",a:" With CMS content widgets we are bringing more power to CMS pages and blocks. You can easily include placeholders to display products, product groups and products sets in CMS pages and blocks. Multiple templates allow you to define which template is used per widget. So, you can for example apply ...",t:"CMS Widget   "},"186":{i:0.00354532849827635,u:"../content/capabilities/cms/cms_widget/available-widgets.html",a:" Currently there are four widgets provided by default in Spryker shop: Product (abstract), Product Set, Product Group and Product Search. They can be found in Administration Interface under Content Management-\u003ePage-\u003e Edit Placeholders-\u003e Content tab. The rules for widget creation are provided in Cms ...",t:"Available Widgets  "},"187":{i:0.00178301796187367,u:"../content/capabilities/cms/cms_widget/enabling-cms-widget.htm",a:" \n\t\t\tCMS content widgets is a CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update composer.json ...",t:"Enabling the Content Widget  "},"188":{i:0.000564153960966466,u:"../content/capabilities/cms/cms-glossary.htm",a:"CMS Glossary    See also: Preview Draft Page    Defining Maximum Size of Content Fields      Last review date: Sep. 20th, 2017\n",t:"CMS Glossary  "},"189":{i:0.000625915129889514,u:"../content/capabilities/cms/content-search-widget.htm",a:"Content Search Widget  Define which pages a user can find in the search, such as specific product or content pages. Pages you don\u0027t wish to be found can be excluded from the search, like the imprint or contact pages. They will appear as auto-suggest flyouts below the search box.",t:"Content Search Widget  "},"190":{i:0.000625915129889514,u:"../content/capabilities/cms/customizable-templates.htm",a:"Customizable Templates  Templates are the go-to solution if you want to emphasize your store branding. They can be assigned to all CMS Pages, to standardize and support your store branding. CMS Blocks can easily be pre-defined, to alleviate work flows.",t:"Customizable Templates  "},"191":{i:0.00191089821033637,u:"../content/capabilities/cms/mg-cms-collector.htm",a:" Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"192":{i:0.00214801778367615,u:"../content/capabilities/cms/mg-cms.htm",a:" Upgrading from Version 4.* to Version 5.* CMS version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"193":{i:0.000625915129889514,u:"../content/capabilities/cms/multi-store-content-translation.htm",a:"Multi-Store Content Translation  All textual elements can be created in various languages to support content creation for multiple language set-ups, e.g. for your international stores.\n",t:"Multi-Store Content Translation  "},"194":{i:0.000625915129889514,u:"../content/capabilities/cms/page-draft-preview.htm",a:"CMS Page Drafts and Previews  Preview and save a draft of your Pages before publishing them live, to judge the final layout as it will appear in your shop.",t:"CMS Page Drafts and Previews  "},"195":{i:0.000625915129889514,u:"../content/capabilities/cms/page-versions.htm",a:"Page Versions  In the Version History you can see and compare all published versions of a CMS Page and quickly roll back to an earlier version with a simple click.",t:"Page Versions  "},"196":{i:0.000625915129889514,u:"../content/capabilities/cms/publish-to-live.htm",a:"Publish to Live  Once your CMS Page or Block content is final you can publish it to your shop website with a single click.",t:"Publish to Live  "},"197":{i:0.000625915129889514,u:"../content/capabilities/cms/time-restricted-page-publishing.htm",a:"Time Restricted Content Page Publishing  Specify exact validity dates to make CMS Pages publicly available within a defined time period. This feature is ideal for limited promotions, seasonal sales or event related pages.",t:"Time Restricted Content Page Publishing  "},"198":{i:0.000625915129889514,u:"../content/capabilities/cms/wysiwyg-editor.htm",a:"WYSIWYG Editor  With the intuitive, user-friendly WYSIWYG-editor you can create and edit content as well as dynamically embed product information and media, such as videos, pictures or any other.",t:"WYSIWYG Editor  "},"199":{i:0.000564153960966466,u:"../content/capabilities/company_account/company-account.htm",a:"The Spryker Commerce OS let\u0027s you accurately model your business structure in the Administration Interface in order to reflect Purchasing Process, Permissions and Roles. With the Company Account, hierarchical business units, shipping and billing addresses as well as permission management are easily ...",t:"Company Account  "},"200":{i:0.000564153960966466,u:"../content/capabilities/company_account/company-user-permissions.htm",a:" \"In order to maintain a clear Role and Permission system, you can easily manage which User has what kind of competencies in your shop environment. \nAny kind of business logic, from simple checks, like single permissions, to complex ones, purchasing limit, customer allocation and business unit ...",t:"Company User Permissions  "},"201":{i:0.000581280106730504,u:"../content/capabilities/crm/crm.htm",a:"CRM (Customer Relationship Management) ",t:"CRM (Customer Relationship Management)    "},"202":{i:0.000687676298812562,u:"../content/capabilities/crm/customer-accounts.htm",a:"Customer Accounts  Let your customers create an Account to save their contact details, addresses, order history and preferences, such as language and shipping options. \nIn the Administration Interface you can view and edit your customer\u0027s account details and check their orders and order history.\n  ",t:"Customer Accounts    "},"203":{i:0.000687676298812562,u:"../content/capabilities/crm/customer-groups.htm",a:"Customer Groups  The Customer Groups feature allows you to organize customers into groups to help you target users for discounts and promotions, give restricted access to specific products or categories or create any other type of segmentation you need. - Customer to group assignment via checkboxes",t:"Customer Groups   "},"204":{i:0.000564153960966466,u:"../content/capabilities/crm/customer-management.htm",a:" Accounts can be assigned to groups for targeting products, discounts, languages and many other types of categorization. Authorization can be handled directly in the shop and items such as subscriptions and passwords can be managed via email. All customer activity can be monitored and configured ...",t:"Customer Management  "},"205":{i:0.0053591341353616,u:"../content/capabilities/crm/customer-module-overview.htm",a:" The Customer entity wraps data around registered customers. Customer data is managed from the Administration Interface by the shop administration and from the shop website itself by customers. This article describes how new customers can be created and managed and how to enable specific features ...",t:"Customer Module Overview  "},"206":{i:0.000687676298812562,u:"../content/capabilities/crm/login-registration.htm",a:"Login and Registration Forms  Tailor the customer registration to your needs. A customer can simply register with an email address and a password or you can choose to ask for more details. Once a customer enters the required information, a customer account is created.",t:"Login and Registration Forms  "},"207":{i:0.0053591341353616,u:"../content/capabilities/crm/mg-customer.htm",a:"   Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table ...",t:"Migration Guide - Customer  "},"208":{i:0.00492643632581452,u:"../content/capabilities/crm/mg-quote.htm",a:" Upgrading from Version 1.* to Version 2.* The new version of Quote module provides the ability to save customer quote into the database and get it. Quote storage strategy (session, database) can be changed in Spryker\\Shared\\Quote\\QuoteConfig::getStorageStrategy. If you’re migrating the Quote module ...",t:"Migration Guide - Quote  "},"209":{i:0.000687676298812562,u:"../content/capabilities/crm/password-management.htm",a:"Password Management  All accounts are password protected. Passwords can easily be restored with a restore-password link.",t:"Password Management  "},"210":{i:0.000564153960966466,u:"../content/capabilities/crm/user-rights-management.htm",a:" User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management  "},"211":{i:0.000581280106730504,u:"../content/capabilities/cross-sell_and_upsell/cross-sell-upsell.htm",a:"Cross-sell and Up-sell ",t:"Cross-sell and Up-sell  "},"212":{i:0.000728850411427927,u:"../content/capabilities/cross-sell_and_upsell/cross-sell.htm",a:"Cross-Sell  You can also easily establish product associations that let your customers see recommendations of products they might also like, to encourage cross-selling.",t:"Cross-Sell  "},"213":{i:0.000728850411427927,u:"../content/capabilities/cross-sell_and_upsell/product-relations.htm",a:" Product Relations let you define a list of items that will be displayed as comparable or additional products. This is especially useful to cross- and up-sell products in order to increase the average order value and maximize sales.\nYou can choose to either use Spryker\u0027s condition rule builder to ...",t:"Product Relations  "},"214":{i:0.000728850411427927,u:"../content/capabilities/cross-sell_and_upsell/upsell.htm",a:"Upsell  To up-sell items, you can build a set of suggestions to offer upscale product versions or additional fixtures to maximize the cart value.",t:"Upsell  "},"215":{i:0.000581280106730504,u:"../content/capabilities/development/development.htm",a:"Development ",t:"Development    "},"216":{i:0.00739299245150148,u:"../content/capabilities/development/collector/collector-development.htm",a:" The Collector module provides mechanisms to manage data consumed by front-end application.\n\nTo populate the data stores, 4 steps are required:\n\n Touch\n \nConfigure\n Collect\n Touch\n In order for anything to be synchronized, first it has to be marked (touched) via the Touch mechanism. Each collector ...",t:"Development - Collector "},"217":{i:0.00492717343781854,u:"../content/capabilities/development/collector/collector-running.htm",a:" Each Collector is executed once for each Locale that’s configured in the Store. To see the currently configured locales, check the stores.php configuration file.\n\nThere are three commands which handle collectors related tasks.\n\n console collector:search:export\nconsole ...",t:"Running Collectors "},"218":{i:0.00492717343781854,u:"../content/capabilities/development/collector/collector-sched-collector-jobs.htm",a:" The cronjob file jobs.php stores the configuration related to collectors.\n\n \u003c?php\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027export-search\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console collector:search:export\u0027,\n    \u0027schedule\u0027 =\u003e \u0027*/10 * * * *\u0027,\n    \u0027enable\u0027 =\u003e false,\n    \u0027stores\u0027 =\u003e $allStores,\n];\n?\u003e In the ...",t:"Scheduling Collector Jobs "},});