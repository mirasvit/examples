<?php

namespace Mirasvit\Example\Block\Adminhtml;

use Magento\Backend\Block\Template;
use Magento\Backend\Block\Template\Context;

class Dialogs extends Template
{
    protected $_template = "dialogs.phtml";

    public function __construct(
        Context $context
    ) {
        parent::__construct($context);
    }

    protected function _isAllowedAction($resourceId)
    {
        return $this->_authorization->isAllowed($resourceId);
    }
}