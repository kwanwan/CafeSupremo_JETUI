define({"oj-message":{fatal:"فادح",error:"خطأ",warning:"تحذير",info:"معلومات",confirmation:"تأكيد","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"القيمة ليست بالصيغة المتوقعة.",detail:"أدخل قيمة بالصيغة المتوقعة.","plural-separator":", ",hint:{summary:"المثال: {exampleValue}",detail:"أدخل قيمة بنفس الصيغة الموضحة في هذا المثال: '{exampleValue}'.","detail-plural":"أدخل قيمة بنفس الصيغة الموضحة في هذه الأمثلة: '{exampleValue}'."},optionHint:{detail:"القيمة المقبولة للخيار '{propertyName}' هي '{propertyValueValid}'.","detail-plural":"القيم المقبولة للخيار '{propertyName}' هي '{propertyValueValid}'."},optionTypesMismatch:{summary:"يلزم وجود قيمة للخيار '{requiredPropertyName}' متى كان الخيار '{propertyName}' معينًا إلى '{propertyValue}'."},optionTypeInvalid:{summary:"لم يتم توفير قيمة من النوع المتوقع للخيار '{propertyName}'."},optionOutOfRange:{summary:"القيمة {propertyValue} خارج نطاق الخيار '{propertyName}'."},optionValueInvalid:{summary:"تم تحديد قيمة '{propertyValue}' غير صالحة للخيار '{propertyName}'."},number:{decimalFormatMismatch:{summary:"'{value}' ليست بالصيغة الرقمية المتوقعة."},shortLongUnsupportedParse:{summary:"الصيغتان 'short' و'long' غير مدعومتين في تحليل المحول.",detail:"غيِّر المكون إلى وضع القراءة فقط؛ حيث إن الحقول المعينة للقراءة فقط لا تستدعي وظيفة التحليل في المحول."},currencyFormatMismatch:{summary:"'{value}' ليست بصيغة العملة المتوقعة."},percentFormatMismatch:{summary:"'{value}' ليست بصيغة النسبة المئوية المتوقعة."}},datetime:{datetimeOutOfRange:{summary:"القيمة '{value}' خارج النطاق بالنسبة لـ '{propertyName}'.",detail:"أدخل قيمة بين '{minValue}' و'{maxValue}'.",hour:"ساعة",minute:"دقيقة",second:"ثانية",millisec:"مللي ثانية",month:"شهر",day:"يوم",year:"سنة","month name":"اسم الشهر",weekday:"يوم في الأسبوع"},dateFormatMismatch:{summary:"'{value}' ليست بصيغة التاريخ المتوقعة."},invalidTimeZoneID:{summary:"تم إدخال معرف منطقة زمنية {timeZoneID} غير صالح."},nonExistingTime:{summary:"الوقت المُدخل غير موجود نظرًا لأنه يقع في فترة الانتقال إلى التوقيت الصيفي."},missingTimeZoneData:{summary:"بيانات TimeZone (المنطقة الزمنية) غير موجودة. الرجاء استدعاء 'ojs/ojtimezonedata' المطلوب للتمكن من تحميل بيانات TimeZone."},timeFormatMismatch:{summary:"'{value}' ليست بصيغة الوقت المتوقعة."},datetimeFormatMismatch:{summary:"'{value}' ليست بصيغة التاريخ والوقت المتوقعة."},dateToWeekdayMismatch:{summary:"اليوم '{date}' لا يقع في '{weekday}'.",detail:"أدخل يومًا من الأسبوع مطابقًا للتاريخ."},invalidISOString:{summary:"سلسلة '{isoStr}' المدخلة ليست سلسلة ISO 8601 صالحة.",detail:"الرجاء إدخال سلسلة ISO 8601 صالحة."}}},"oj-validator":{length:{hint:{min:"أدخل {min} أو المزيد من الأحرف.",max:"أدخل {max} أو أحرفًا أقل.",inRange:"أدخل {min} أو المزيد من الأحرف، وصولاً إلى {max} بحد أقصى.",exact:"أدخل {length} من الأحرف."},messageDetail:{tooShort:"أدخل {min} أو المزيد من الأحرف، وليس أحرفًا أقل.",tooLong:"أدخل {max} أو أحرفًا أقل، وليس المزيد منها."},messageSummary:{tooShort:"يوجد عدد صغير جدًا من الحروف.",tooLong:"يوجد عدد كبير جدًا من الحروف."}},range:{number:{hint:{min:"أدخل رقمًا أكبر من أو يساوي {min}.",max:"أدخل رقمًا أقل من أو يساوي {max}.",inRange:"أدخل رقمًا بين {min} و{max}.",exact:"أدخل الرقم {num}."},messageDetail:{rangeUnderflow:"يجب أن يكون الرقم أكبر من أو يساوي {min}.",rangeOverflow:"يجب أن يكون الرقم أقل من أو يساوي {max}.",exact:"يجب أن يكون الرقم {num}."},messageSummary:{rangeUnderflow:"الرقم منخفض جدًا.",rangeOverflow:"الرقم عال جدًا."}},datetime:{hint:{min:"أدخل تاريخًا ووقتًا في أو بعد {min}.",max:"أدخل تاريخًا ووقتًا في أو قبل {max}.",inRange:"أدخل تاريخًا ووقتًا بين {min} و{max}."},messageDetail:{rangeUnderflow:"يجب أن يكون التاريخ والوقت في أو بعد {min}.",rangeOverflow:"يجب أن يكون التاريخ والوقت في أو قبل {max}."},messageSummary:{rangeUnderflow:"التاريخ والوقت يسبقان الحد الأدنى للتاريخ والوقت.",rangeOverflow:"التاريخ والوقت متأخران عن الحد الأقصى للتاريخ والوقت."}},date:{hint:{min:"أدخل تاريخًا في أو بعد {min}.",max:"أدخل تاريخًا في أو قبل {max}.",inRange:"أدخل تاريخًا بين {min} و{max}."},messageDetail:{rangeUnderflow:"يجب أن يكون التاريخ في أو بعد {min}.",rangeOverflow:"يجب أن يكون التاريخ في أو قبل {max}."},messageSummary:{rangeUnderflow:"التاريخ سابق على الحد الأدنى للتاريخ.",rangeOverflow:"التاريخ لاحق للحد الأقصى للتاريخ."}},time:{hint:{min:"أدخل وقتًا في أو بعد {min}.",max:"أدخل وقتًا في أو قبل {max}.",inRange:"أدخل وقتًا بين {min} و{max}."},messageDetail:{rangeUnderflow:"يجب أن يكون الوقت في أو بعد {min}.",rangeOverflow:"يجب أن يكون الوقت في أو قبل {max}."},messageSummary:{rangeUnderflow:"الوقت يسبق الحد الأدنى للوقت.",rangeOverflow:"الوقت لاحق للحد الأقصى للوقت."}}},restriction:{date:{messageSummary:"التاريخ {value} من إدخال معطل.",messageDetail:"التاريخ {value} يجب ألا يكون من إدخال معطل."}},regExp:{summary:"الصيغة غير صحيحة.",detail:"يجب أن تكون القيمة '{value}' مطابقة لهذا النمط: '{pattern}'."},required:{summary:"القيمة مطلوبة.",detail:"يجب إدخال قيمة."}},"oj-ojInputDate":{done:"تم",cancel:"إلغاء",prevText:"السابق",nextText:"التالي",currentText:"اليوم",weekHeader:"أسبوع",tooltipCalendar:"تحديد التاريخ.",tooltipCalendarTime:"تحديد التاريخ/الوقت.",tooltipCalendarDisabled:"تحديد التاريخ معطل.",tooltipCalendarTimeDisabled:"تحديد التاريخ/الوقت معطل.",picker:"منتقي",weekText:"أسبوع",datePicker:"منتقي التاريخ",inputHelp:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى التقويم.",inputHelpBoth:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى التقويم وعلى Shift + مفتاح للأسفل أو Shift مع مفتاح للأعلى للوصول إلى قائمة الوقت المنسدلة.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"إلغاء",okText:"موافق",currentTimeText:"الآن",hourWheelLabel:"ساعة",minuteWheelLabel:"دقيقة",ampmWheelLabel:"ص/م",tooltipTime:"تحديد الوقت.",tooltipTimeDisabled:"تحديد الوقت معطل.",inputHelp:"اضغط على مفتاح للأسفل أو مفتاح للأعلى للوصول إلى القائمة المنسدلة للوقت.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"يجب أن تكون القيمة مطابقة لهذا النمط: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"عرض الصفحة {pageIndex} من {pageCount}",labelAccArrowNextPage:'تحديد "التالي" لعرض الصفحة التالية',labelAccArrowPreviousPage:'تحديد "السابق" لعرض الصفحة السابقة',tipArrowNextPage:"التالي",tipArrowPreviousPage:"السابق"},"oj-ojDataGrid":{accessibleSortAscending:"{id} تم فرزه بترتيب تصاعدي",accessibleSortDescending:"{id} فرز بترتيب تنازلي",accessibleActionableMode:"دخول وضع اتخاذ إجراءات.",accessibleNavigationMode:"ادخل وضع الاستكشاف، واضغط على F2 للدخول في وضع التحرير أو الإجراءات الأخرى.",accessibleEditableMode:"ادخل في الوضع القابل للتحرير، واضغط على escape للانتقال خارج شبكة البيانات.",accessibleSummaryExact:"هذه شبكة بيانات تشتمل على {rownum} من الصفوف و{colnum} من الأعمدة",accessibleSummaryEstimate:"هذه شبكة بيانات تشتمل على عدد غير معروف من الصفوف والأعمدة",accessibleSummaryExpanded:"هناك {num} من الصفوف الموسعة حاليًا",accessibleRowExpanded:"الصف موسع",accessibleRowCollapsed:"الصف مطوي",accessibleRowSelected:"تم تحديد الصف {row}",accessibleColumnSelected:"تم تحديد العمود {column}",accessibleStateSelected:"محدد",accessibleMultiCellSelected:"تم تحديد {num} من الخلايا",accessibleColumnSpanContext:"{extent} عريض",accessibleRowSpanContext:"{extent} مرتفع",accessibleRowContext:"الصف {index}",accessibleColumnContext:"العمود {index}",accessibleRowHeaderContext:"رأس الصف {index}",accessibleColumnHeaderContext:"رأس العمود {index}",accessibleRowEndHeaderContext:"رأس نهاية الصف {index}",accessibleColumnEndHeaderContext:"رأس نهاية العمود {index}",accessibleLevelContext:"المستوى {level}",accessibleRangeSelectModeOn:"وضع إضافة نطاق الخلايا المحدد قيد التشغيل.",accessibleRangeSelectModeOff:"وضع إضافة نطاق الخلايا المحدد متوقف.",accessibleFirstRow:"لقد بلغت الصف الأول.",accessibleLastRow:"لقد بلغت الصف الأخير.",accessibleFirstColumn:"لقد بلغت العمود الأول",accessibleLastColumn:"لقد بلغت العمود الأخير.",accessibleSelectionAffordanceTop:"مرجع أعلى اختيار.",accessibleSelectionAffordanceBottom:"مرجع أدنى اختيار.",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها.",labelResize:"إعادة تحجيم",labelResizeWidth:"تغيير العرض",labelResizeHeight:"تغيير الارتفاع",labelSortRow:"فرز الصف",labelSortRowAsc:"فرز الصف تصاعديًا",labelSortRowDsc:"فرز الصف تنازليًا",labelSortCol:"فرز العمود",labelSortColAsc:"فرز العمود تصاعديًا",labelSortColDsc:"فرز العمود تنازليًا",labelCut:"قص",labelPaste:"لصق",labelEnableNonContiguous:"تمكين الاختيار غير القريب",labelDisableNonContiguous:"تعطيل الاختيار غير القريب",labelResizeDialogSubmit:"موافق"},"oj-ojRowExpander":{accessibleLevelDescription:"المستوى {level}",accessibleRowDescription:"المستوى {level}، الصف {num} من {total}",accessibleRowExpanded:"الصف موسع",accessibleRowCollapsed:"الصف مطوي",accessibleStateExpanded:"موسع",accessibleStateCollapsed:"مطوي"},"oj-ojListView":{msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها.",indexerCharacters:"أ|ب|ت|ث|ج|ح|خ|د|ذ|ر|ز|س|ش|ص|ط|ع|غ|ف|ق|ك|ل|م|ن|هـ|و|ي",accessibleReorderTouchInstructionText:"انقر نقرًا مزدوجًا واستمر في الضغط.  انتظر حتى سماع الصوت ثم اسم لإعادة الترتيب.",accessibleReorderBeforeItem:"قبل {item}",accessibleReorderAfterItem:"بعد {item}",accessibleReorderInsideItem:"في {item}",accessibleNavigateSkipItems:"تخطي {numSkip} من العناصر",labelCut:"قص",labelCopy:"نسخ",labelPaste:"لصق",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد"},"oj-_ojLabel":{tooltipHelp:"تعليمات",tooltipRequired:"مطلوب"},"oj-ojLabel":{tooltipHelp:"تعليمات",tooltipRequired:"مطلوب"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"نقص",tooltipIncrement:"زيادة"},"oj-ojTable":{labelAccSelectionAffordanceTop:"مرجع أعلى اختيار",labelAccSelectionAffordanceBottom:"مرجع أدنى اختيار",labelEnableNonContiguousSelection:"تمكين الاختيار غير القريب",labelDisableNonContiguousSelection:"تعطيل الاختيار غير القريب",labelResize:"إعادة تحجيم",labelResizePopupSubmit:"موافق",labelResizePopupSpinner:"إعادة تحجيم عمود",labelSelectRow:"تحديد صف",labelEditRow:"تحرير صف",labelSelectAndEditRow:"تحديد صف وتحريره",labelSelectColumn:"تحديد عمود",labelSort:"فرز",labelSortAsc:"فرز تصاعدي",labelSortDsc:"فرز تنازلي",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد بيانات لعرضها.",msgInitializing:"جارٍ التهيئة...",msgColumnResizeWidthValidation:"يجب أن تكون قيمة العرض عددًا صحيحًا.",msgScrollPolicyMaxCountSummary:"تم تجاوز الحد الأقصى لعدد الصفوف المسموح بتمريرها في الجدول.",msgScrollPolicyMaxCountDetail:"الرجاء إعادة تحميل مجموعة بيانات أصغر.",msgStatusSortAscending:"{0} تم فرزه بترتيب تصاعدي.",msgStatusSortDescending:"{0} فرز بترتيب تنازلي."},"oj-ojTabs":{labelCut:"قص",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد",labelRemove:"إزالة",labelReorder:"إعادة ترتيب",removeCueText:"قابل للإزالة"},"oj-ojCheckboxset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"حقل البحث",noMatchesFound:"لم يتم العثور على عناصر مطابقة",oneMatchesFound:"تم العثور على عنصر مطابق واحد",moreMatchesFound:"تم العثور على {num} من الحالات المطابقة",filterFurther:"المزيد من النتائج متوفرة، يرجى إجراء ترشيح إضافي"},"oj-ojSwitch":{SwitchON:"تشغيل",SwitchOFF:"إيقاف"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"لم يتم العثور على عناصر مطابقة",filterFurther:"المزيد من النتائج متوفرة، يرجى إجراء ترشيح إضافي"},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"لم يتم العثور على عناصر مطابقة",oneMatchesFound:"تم العثور على عنصر مطابق واحد",moreMatchesFound:"تم العثور على {num} من الحالات المطابقة"},"oj-ojTree":{stateLoading:"جارٍ التحميل...",labelNewNode:"نقطة توصيل جديدة",labelMultiSelection:"اختيار متعدد",labelEdit:"تحرير",labelCreate:"تكوين",labelCut:"قص",labelCopy:"نسخ",labelPaste:"لصق",labelPasteAfter:"لصق بعد",labelPasteBefore:"لصق قبل",labelRemove:"إزالة",labelRename:"إعادة تسمية",labelNoData:"لا توجد بيانات"},"oj-ojPagingControl":{labelAccPaging:"ترقيم الصفحات",labelAccNavFirstPage:"الصفحة الأولى",labelAccNavLastPage:"الصفحة الأخيرة",labelAccNavNextPage:"الصفحة التالية",labelAccNavPreviousPage:"الصفحة السابقة",labelAccNavPage:"الصفحة",labelLoadMore:"إظهار المزيد...",labelLoadMoreMaxRows:"تم بلوغ الحد الأقصى البالغ {maxRows} من الصفوف",labelNavInputPage:"الصفحة",labelNavInputPageMax:"من {pageMax}",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:"من",msgItemRangeOfAtLeast:"يتألف على الأقل من",msgItemRangeOfApprox:"يتألف من قرابة",msgItemRangeItems:"عناصر",tipNavInputPage:"انتقال إلى الصفحة",tipNavPageLink:"انتقال إلى الصفحة {pageNum}",tipNavNextPage:"التالي",tipNavPreviousPage:"السابق",tipNavFirstPage:"الأول",tipNavLastPage:"الأخير",pageInvalid:{summary:"قيمة الصفحة المدخلة غير صالحة.",detail:"الرجاء إدخال قيمة أكبر من 0."},maxPageLinksInvalid:{summary:"قيمة maxPageLinks غير صالحة.",detail:"الرجاء إدخال قيمة أكبر من 4."}},"oj-ojMasonryLayout":{labelCut:"قص",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد"},"oj-panel":{labelAccButtonExpand:"توسيع",labelAccButtonCollapse:"طي",labelAccButtonRemove:"إزالة"},"oj-ojChart":{labelDefaultGroupName:"المجموعة {0}",labelSeries:"المتوالية",labelGroup:"المجموعة",labelDate:"التاريخ",labelValue:"القيمة",labelTargetValue:"الهدف",labelX:"س",labelY:"ص",labelZ:"ع",labelPercentage:"النسبة المئوية",labelLow:"منخفض",labelHigh:"مرتفع",labelOpen:"مفتوح",labelClose:"مغلق",labelVolume:"الحجم",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"الحد الأدنى",labelMax:"الحد الأقصى",labelOther:"غير ذلك",tooltipPan:"تحريك",tooltipSelect:"تحديد نص متحرك",tooltipZoom:"تكبير/تصغير نص متحرك",componentName:"الرسم البياني"},"oj-dvtBaseGauge":{componentName:"المعيار"},"oj-ojDiagram":{promotedLink:"{0} ارتباط",promotedLinks:"{0} من الارتباطات",promotedLinkAriaDesc:"غير مباشر",componentName:"الرسم التخطيطي"},"oj-ojGantt":{componentName:"Gantt",accessibleDurationDays:"{0} من الأيام",accessibleDurationHours:"{0} من الساعات",accessibleTaskInfo:"وقت البداية {0}، وقت النهاية {1}، المدة {2}",accessibleMilestoneInfo:"الوقت {0}",accessibleRowInfo:"الصف {0}",accessibleTaskTypeMilestone:"المرحلة الرئيسية",accessibleTaskTypeSummary:"الملخص",accessiblePredecessorInfo:"{0} العناصر السابقة",accessibleSuccessorInfo:"{0} العناصر اللاحقة",accessibleDependencyInfo:"نوع التبعية {0}، يربط {1} بـ {2}",startStartDependencyAriaDesc:"من البداية إلى البداية",startFinishDependencyAriaDesc:"من البداية إلى النهاية",finishStartDependencyAriaDesc:"من النهاية إلى البداية",finishFinishDependencyAriaDesc:"من النهاية إلى النهاية",tooltipZoomIn:"تقريب",tooltipZoomOut:"إبعاد",labelRow:"الصف",labelStart:"البداية",labelEnd:"النهاية",labelDate:"التاريخ",labelBaselineStart:"البداية الأساسية",labelBaselineEnd:"النهاية الأساسية",labelBaselineDate:"التاريخ الأساسي",labelLabel:"التسمية",labelProgress:"التقدم",labelMoveBy:"النقل حسب",taskMoveInitiated:"بدء نقل المهمة",taskMoveSelectionInfo:"تحديد {0} من الاختيارات الأخرى",taskMoveInitiatedInstruction:"استخدم مفاتيح الأسهم للنقل",taskMoveFinalized:"إتمام نقل المهمة",taskMoveCancelled:"إلغاء نقل المهمة"},"oj-ojLegend":{componentName:"مفتاح الرسم"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"غير ذلك",labelGroup:"المجموعة",labelSize:"الحجم",labelAdditionalData:"بيانات إضافية",componentName:"مربع بعدد حقول ن"},"oj-ojPictoChart":{componentName:"رسم بياني كصورة"},"oj-ojSparkChart":{componentName:"الرسم البياني"},"oj-ojSunburst":{labelColor:"اللون",labelSize:"الحجم",tooltipExpand:"توسيع",tooltipCollapse:"طي",componentName:"حلقي متدرج"},"oj-ojTagCloud":{componentName:"مجموعة العلامات"},"oj-ojThematicMap":{componentName:"خريطة محددة الموضوع"},"oj-ojTimeAxis":{componentName:"محور الوقت"},"oj-ojTimeline":{componentName:"المخطط الزمني",accessibleItemDesc:"الوصف {0}.",accessibleItemEnd:"وقت النهاية {0}.",accessibleItemStart:"وقت البداية {0}.",accessibleItemTitle:"العنوان {0}.",labelSeries:"المتوالية",tooltipZoomIn:"تقريب",tooltipZoomOut:"إبعاد"},"oj-ojTreemap":{labelColor:"اللون",labelSize:"الحجم",tooltipIsolate:"عزل",tooltipRestore:"استعادة",componentName:"التخطيط الشبكي"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"أ",labelScalingSuffixMillion:"م",labelScalingSuffixBillion:"ب",labelScalingSuffixTrillion:"ت",labelScalingSuffixQuadrillion:"ك",labelInvalidData:"البيانات غير صالحة",labelNoData:"لا توجد بيانات",labelClearSelection:"مسح الاختيار",labelDataVisualization:"التصور المرئي للبيانات",stateSelected:"محدد",stateUnselected:"غير محدد",stateMaximized:"مكبر",stateMinimized:"مصغر",stateExpanded:"موسع",stateCollapsed:"مطوي",stateIsolated:"معزول",stateHidden:"مخفي",stateVisible:"مرئي",stateDrillable:"قابل للتنقل",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} من {1}"},"oj-ojNavigationList":{defaultRootLabel:"قائمة الاستكشاف",hierMenuBtnLabel:"زر القائمة المتدرجة",selectedLabel:"محدد",previousIcon:"السابق",msgFetchingData:"جارٍ سحب البيانات...",msgNoData:"لا توجد عناصر لعرضها.",overflowItemLabel:"المزيد",accessibleReorderTouchInstructionText:"انقر نقرًا مزدوجًا واستمر في الضغط.  انتظر حتى سماع الصوت ثم اسم لإعادة الترتيب.",accessibleReorderBeforeItem:"قبل {item}",accessibleReorderAfterItem:"بعد {item}",labelCut:"قص",labelPasteBefore:"لصق قبل",labelPasteAfter:"لصق بعد",labelRemove:"إزالة",removeCueText:"قابل للإزالة"},"oj-ojSlider":{noValue:"لا يشتمل ojSlider على قيمة",maxMin:"يجب ألا يكون الحد الأقصى أقل من الحد الأدنى أو مساويًا له",valueRange:"يجب أن تكون القيمة في النطاق من الأدنى إلى الأقصى",optionNum:"خيار {option} ليس رقمًا",invalidStep:"الخطوة غير صالحة؛ يجب أن تكون الخطوة > 0"},"oj-ojDialog":{labelCloseIcon:"مغلق"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"الدخول في القائمة المنبثقة. اضغط على F6 للتنقل بين القائمة المنبثقة وعنصر التحكم المقترن.",ariaLiveRegionInitialFocusNone:"القائمة المنبثقة مفتوحة. اضغط على F6 للتنقل بين القائمة المنبثقة وعنصر التحكم المقترن.",ariaLiveRegionInitialFocusFirstFocusableTouch:"الدخول في القائمة المنبثقة. يمكن إغلاق القائمة المنبثقة عبر الانتقال إلى آخر ارتباط في القائمة.",ariaLiveRegionInitialFocusNoneTouch:"القائمة المنبثقة مفتوحة.  انتقل إلى الارتباط التالي لتحديد موضع التركيز في القائمة.",ariaFocusSkipLink:"اضغط ضغطًا مزدوجًا للانتقال إلى القائمة المنبثقة المفتوحة.",ariaCloseSkipLink:"اضغط ضغطًا مزدوجًا لإغلاق القائمة المنبثقة المفتوحة."},"oj-pullToRefresh":{ariaRefreshLink:"تنشيط الارتباط لتجديد المحتوى",ariaRefreshingLink:"تجديد المحتوى",ariaRefreshCompleteLink:"تم التجديد"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"إظهار إجراءات البداية",ariaShowEndActionsDescription:"إظهار إجراءات النهاية",ariaHideActionsDescription:"إخفاء الإجراءات"},"oj-ojIndexer":{indexerCharacters:"أ|ب|ت|ث|ج|ح|خ|د|ذ|ر|ز|س|ش|ص|ط|ع|غ|ف|ق|ك|ل|م|ن|هـ|و|ي",indexerOthers:"#",ariaDisabledLabel:"لا يوجد رأس مجموعة مطابق",ariaOthersLabel:"رقم",ariaInBetweenText:"بين {first} و{second}",ariaKeyboardInstructionText:"اضغط على enter لتحديد قيمة.",ariaTouchInstructionText:"انقر نقرًا مزدوجًا واستمر في الضغط للدخول في وضع الإيماء، ثم اسحب لأعلى أو لأسفل لتعديل القيمة."},"oj-ojMenu":{labelCancel:"إلغاء"},"oj-ojColorSpectrum":{labelHue:"تدرج الألوان",labelOpacity:"معدل الشفافية",labelSatLum:"التشبع/النصوع",labelThumbDesc:"شريط تمرير نطاق الألوان رباعي الاتجاه."},"oj-ojColorPalette":{labelNone:"بلا"},"oj-ojColorPicker":{labelSwatches:"عينات الألوان",labelCustomColors:"الألوان المخصصة",labelPrevColor:"اللون السابق",labelDefColor:"اللون الافتراضي",labelDelete:"حذف",labelDeleteQ:"هل تريد الحذف؟",labelAdd:"إضافة",labelAddColor:"إضافة لون",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"تدرج الألوان",labelSliderSaturation:"التشبع",labelSliderSat:"تشبع",labelSliderLightness:"السطوع",labelSliderLum:"النصوع",labelSliderAlpha:"ألفا",labelOpacity:"معدل الشفافية",labelSliderRed:"أحمر",labelSliderGreen:"أخضر",labelSliderBlue:"أزرق"},"oj-ojFilePicker":{dropzoneText:"أسقط الملفات هنا لتحميلها"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"قيد التقدم"},"oj-ojMessage":{labelCloseIcon:"مغلق",categories:{error:"ERROR",warning:"WARNING",info:"INFORMATION",confirmation:"CONFIRMATION"}},"oj-ojMessages":{labelLandmark:"الرسائل",ariaLiveRegion:{navigationFromKeyboard:"دخول منطقة الرسائل. اضغط على F6 للعودة إلى العنصر السابق محل التركيز.",navigationToTouch:"تشتمل منطقة الرسائل على رسائل جديدة. استخدم عنصر تحكم التعليق الصوتي للانتقال إلى علامة الرسائل.",navigationToKeyboard:"تشتمل منطقة الرسائل على رسائل جديدة. اضغط على F6 للانتقال إلى منطقة أحدث الرسائل.",newMessage:"فئة الرسالة {category}. {summary}."}}});
