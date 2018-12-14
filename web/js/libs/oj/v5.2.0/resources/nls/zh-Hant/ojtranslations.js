define({"oj-message":{fatal:"嚴重",error:"錯誤",warning:"警告",info:"資訊",confirmation:"確認","compact-type-summary":"{0}: {1}"},"oj-converter":{summary:"值不是使用預期的格式.",detail:"輸入使用預期格式的值.","plural-separator":", ",hint:{summary:"範例: {exampleValue}",detail:"依右列範例的格式輸入值: '{exampleValue}'.","detail-plural":"依右列這些範例的格式輸入值: '{exampleValue}'."},optionHint:{detail:"'{propertyName}' 選項接受的值為 '{propertyValueValid}'.","detail-plural":"'{propertyName}' 選項接受的值為 '{propertyValueValid}'."},optionTypesMismatch:{summary:"當 '{propertyName}' 選項設為 '{propertyValue}' 時, 必須指定 '{requiredPropertyName}' 選項的值."},optionTypeInvalid:{summary:"未在 '{propertyName}' 選項提供符合預期類型的值."},optionOutOfRange:{summary:"'{propertyName}' 選項的 {propertyValue} 值超出範圍."},optionValueInvalid:{summary:"為 '{propertyName}' 選項指定的 '{propertyValue}' 值無效."},number:{decimalFormatMismatch:{summary:"'{value}' 不是使用預期的數字格式."},shortLongUnsupportedParse:{summary:"轉換器剖析不支援 'short' 和 'long'.",detail:"將元件變更為 readonly. readonly 欄位不會呼叫轉換器的 parse 函數."},currencyFormatMismatch:{summary:"'{value}' 不是使用預期的幣別格式."},percentFormatMismatch:{summary:"'{value}' 不是使用預期的百分比格式."}},datetime:{datetimeOutOfRange:{summary:"'{propertyName}' 的 '{value}' 值超出範圍.",detail:"輸入 '{minValue}' 到 '{maxValue}' 之間的值.",hour:"小時",minute:"分鐘",second:"秒",millisec:"毫秒",month:"月",day:"天",year:"年","month name":"月份名稱",weekday:"工作日"},dateFormatMismatch:{summary:"'{value}' 不是使用預期的日期格式."},invalidTimeZoneID:{summary:"提供的時區 ID {timeZoneID} 無效."},nonExistingTime:{summary:"輸入時間不存在, 因為它在轉換成日光節約時間時發生異常狀況."},missingTimeZoneData:{summary:"遺漏 TimeZone 資料. 請呼叫必要的 'ojs/ojtimezonedata', 以載入 TimeZone 資料."},timeFormatMismatch:{summary:"'{value}' 不是使用預期的時間格式."},datetimeFormatMismatch:{summary:"'{value}' 不是使用預期的日期和時間格式."},dateToWeekdayMismatch:{summary:"日期 '{date}' 不是 '{weekday}'.",detail:"輸入與日期對應的一週天次."},invalidISOString:{summary:"提供的 '{isoStr}' 不是有效的 ISO 8601 字串.",detail:"請提供有效的 ISO 8601 字串."}}},"oj-validator":{length:{hint:{min:"輸入 {min} 個或更多的字元.",max:"輸入 {max} 個或更少的字元.",inRange:"輸入 {min} 個或更多的字元, 但最多不能超過上限 {max} 個.",exact:"輸入 {length} 個字元."},messageDetail:{tooShort:"輸入 {min} 個或更多的字元, 不可少於此數目.",tooLong:"輸入 {max} 個或更少的字元, 不可超過此數目."},messageSummary:{tooShort:"字元太少.",tooLong:"字元太多."}},range:{number:{hint:{min:"輸入大於或等於 {min} 的數字.",max:"輸入小於或等於 {max} 的數字.",inRange:"輸入 {min} 到 {max} 之間的數字.",exact:"輸入數字 {num}."},messageDetail:{rangeUnderflow:"數字必須大於或等於 {min}.",rangeOverflow:"數字必須小於或等於 {max}.",exact:"數字必須是 {num}."},messageSummary:{rangeUnderflow:"數字太小.",rangeOverflow:"數字太大."}},datetime:{hint:{min:"輸入等於或晚於 {min} 的日期與時間.",max:"輸入等於或早於 {max} 的日期與時間.",inRange:"輸入 {min} 到 {max} 之間的日期與時間."},messageDetail:{rangeUnderflow:"日期與時間必須等於或晚於 {min}.",rangeOverflow:"日期與時間必須等於或早於 {max}."},messageSummary:{rangeUnderflow:"日期與時間早於最早日期與時間.",rangeOverflow:"日期與時間晚於最晚日期與時間."}},date:{hint:{min:"輸入 {min} 當日或之後的日期.",max:"輸入 {max} 當日或之前的日期.",inRange:"輸入 {min} 到 {max} 之間的日期."},messageDetail:{rangeUnderflow:"日期必須等於或晚於 {min}.",rangeOverflow:"日期必須等於或早於 {max}."},messageSummary:{rangeUnderflow:"日期早於最早日期.",rangeOverflow:"日期晚於最晚日期."}},time:{hint:{min:"輸入 {min} 當時或之後的時間.",max:"輸入 {max} 當時或之前的時間.",inRange:"輸入 {min} 到 {max} 之間的時間."},messageDetail:{rangeUnderflow:"時間必須等於或晚於 {min}.",rangeOverflow:"時間必須等於或早於 {max}."},messageSummary:{rangeUnderflow:"時間早於最早時間.",rangeOverflow:"時間晚於最晚時間."}}},restriction:{date:{messageSummary:"日期 {value} 是停用的項目.",messageDetail:"日期 {value} 不可以是停用的項目."}},regExp:{summary:"格式不正確.",detail:"值 '{value}' 必須是右列樣式: '{pattern}'."},required:{summary:"必須輸入值.",detail:"您必須輸入值."}},"oj-ojInputDate":{done:"完成",cancel:"取消",prevText:"上個月",nextText:"下個月",currentText:"今天",weekHeader:"週",tooltipCalendar:"選取日期.",tooltipCalendarTime:"選取日期時間.",tooltipCalendarDisabled:"選取日期已停用.",tooltipCalendarTimeDisabled:"選取日期時間已停用.",picker:"選擇器",weekText:"週",datePicker:"日期選擇器",inputHelp:"按向下鍵或向上鍵來存取行事曆.",inputHelpBoth:"按向下鍵或向上鍵來存取行事曆, 以及按 Shift + 向下鍵或 Shift + 向上鍵來存取時間下拉式清單.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},dateRestriction:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojInputTime":{cancelText:"取消",okText:"確定",currentTimeText:"現在",hourWheelLabel:"小時",minuteWheelLabel:"分鐘",ampmWheelLabel:"AMPM",tooltipTime:"選取時間.",tooltipTimeDisabled:"選取時間已停用.",inputHelp:"按向下鍵或向上鍵來存取時間下拉式清單.",dateTimeRange:{hint:{min:"",max:"",inRange:""},messageDetail:{rangeUnderflow:"",rangeOverflow:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}}},"oj-inputBase":{required:{hint:"",messageSummary:"",messageDetail:""},regexp:{messageSummary:"",messageDetail:""}},"oj-ojInputPassword":{regexp:{messageDetail:"值必須是此樣式: '{pattern}'."}},"oj-ojFilmStrip":{labelAccFilmStrip:"顯示第 {pageIndex}/{pageCount} 頁",labelAccArrowNextPage:"選取「下一頁」以顯示下一頁",labelAccArrowPreviousPage:"選取「上一頁」以顯示上一頁",tipArrowNextPage:"下一頁",tipArrowPreviousPage:"上一頁"},"oj-ojDataGrid":{accessibleSortAscending:"以遞增順序排序 {id}",accessibleSortDescending:"以遞減順序排序 {id}",accessibleActionableMode:"進入可執行動作的模式.",accessibleNavigationMode:"進入導覽模式, 按下 F2 可進入編輯模式或進入可執行動作模式.",accessibleEditableMode:"進入可執行動作模式, 按下 ESC 可瀏覽資料網格以外的區域.",accessibleSummaryExact:"這是 {rownum} 個列與 {colnum} 個欄的資料網格",accessibleSummaryEstimate:"這是列與欄數目不明的資料網格",accessibleSummaryExpanded:"目前已展開 {num} 個列",accessibleRowExpanded:"已展開的列",accessibleRowCollapsed:"已收縮的列",accessibleRowSelected:"已選取第 {row} 列",accessibleColumnSelected:"已選取第 {column} 欄",accessibleStateSelected:"已選取",accessibleMultiCellSelected:"已選取 {num} 個儲存格",accessibleColumnSpanContext:"{extent} 寬",accessibleRowSpanContext:"{extent} 高",accessibleRowContext:"列 {index}",accessibleColumnContext:"欄 {index}",accessibleRowHeaderContext:"列表頭 {index}",accessibleColumnHeaderContext:"欄表頭 {index}",accessibleRowEndHeaderContext:"列結束表頭 {index}",accessibleColumnEndHeaderContext:"欄結束表頭 {index}",accessibleLevelContext:"層次 {level}",accessibleRangeSelectModeOn:"新增選取的儲存格範圍模式開啟.",accessibleRangeSelectModeOff:"新增選取的儲存格範圍模式關閉.",accessibleFirstRow:"已到達第一列.",accessibleLastRow:"已到達最後一列.",accessibleFirstColumn:"已到達第一欄",accessibleLastColumn:"已到達最後一欄.",accessibleSelectionAffordanceTop:"頂端選取控點.",accessibleSelectionAffordanceBottom:"底端選取控點.",msgFetchingData:"正在擷取資料...",msgNoData:"沒有可顯示的項目. ",labelResize:"調整大小",labelResizeWidth:"調整寬度",labelResizeHeight:"調整高度",labelSortRow:"排序列",labelSortRowAsc:"以遞增方式排序列",labelSortRowDsc:"以遞減方式排序列",labelSortCol:"排序欄",labelSortColAsc:"以遞增方式排序欄",labelSortColDsc:"以遞減方式排序欄",labelCut:"剪下",labelPaste:"貼上",labelEnableNonContiguous:"啟用非連續選取",labelDisableNonContiguous:"停用非連續選取",labelResizeDialogSubmit:"確定"},"oj-ojRowExpander":{accessibleLevelDescription:"層次 {level}",accessibleRowDescription:"層次 {level}, 第 {num} 列 (共 {total} 列)",accessibleRowExpanded:"已展開的列",accessibleRowCollapsed:"已收縮的列",accessibleStateExpanded:"已展開",accessibleStateCollapsed:"已收縮"},"oj-ojListView":{msgFetchingData:"正在擷取資料...",msgNoData:"沒有可顯示的項目. ",indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",accessibleReorderTouchInstructionText:"點兩下並按住.  等聽到聲音後再拖曳進行重新安排.",accessibleReorderBeforeItem:"在 {item} 之前",accessibleReorderAfterItem:"在 {item} 之後",accessibleReorderInsideItem:"至 {item}",accessibleNavigateSkipItems:"略過 {numSkip} 個項目",labelCut:"剪下",labelCopy:"複製",labelPaste:"貼上",labelPasteBefore:"貼在之前",labelPasteAfter:"貼在之後"},"oj-_ojLabel":{tooltipHelp:"說明",tooltipRequired:"必要"},"oj-ojLabel":{tooltipHelp:"說明",tooltipRequired:"必要"},"oj-ojInputNumber":{required:{hint:"",messageSummary:"",messageDetail:""},numberRange:{hint:{min:"",max:"",inRange:"",exact:""},messageDetail:{rangeUnderflow:"",rangeOverflow:"",exact:""},messageSummary:{rangeUnderflow:"",rangeOverflow:""}},tooltipDecrement:"遞減",tooltipIncrement:"遞增"},"oj-ojTable":{labelAccSelectionAffordanceTop:"頂端選取控點",labelAccSelectionAffordanceBottom:"底端選取控點",labelEnableNonContiguousSelection:"啟用非連續選取",labelDisableNonContiguousSelection:"停用非連續選取",labelResize:"調整大小",labelResizePopupSubmit:"確定",labelResizePopupSpinner:"重新調整資料欄大小",labelSelectRow:"選取列",labelEditRow:"編輯列",labelSelectAndEditRow:"選取並編輯列",labelSelectColumn:"選取欄",labelSort:"排序",labelSortAsc:"遞增排序",labelSortDsc:"遞減排序",msgFetchingData:"正在擷取資料...",msgNoData:"沒有資料可供顯示.",msgInitializing:"正在起始...",msgColumnResizeWidthValidation:"寬值必須為整數.",msgScrollPolicyMaxCountSummary:"超出表格捲動的列數上限.",msgScrollPolicyMaxCountDetail:"請重新載入較小的資料集.",msgStatusSortAscending:"{0} 以遞增順序排序.",msgStatusSortDescending:"{0} 以遞減順序排序."},"oj-ojTabs":{labelCut:"剪下",labelPasteBefore:"貼在之前",labelPasteAfter:"貼在之後",labelRemove:"移除",labelReorder:"重新排序",removeCueText:"可移除"},"oj-ojCheckboxset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojRadioset":{required:{hint:"",messageSummary:"",messageDetail:""}},"oj-ojSelect":{required:{hint:"",messageSummary:"",messageDetail:""},searchField:"搜尋欄位",noMatchesFound:"找不到相符項目",oneMatchesFound:"找到一個相符項目",moreMatchesFound:"找到 {num} 個相符項目",filterFurther:"還有更多搜尋結果, 請進一步篩選."},"oj-ojSwitch":{SwitchON:"開啟",SwitchOFF:"關閉"},"oj-ojCombobox":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"找不到相符項目",filterFurther:"還有更多搜尋結果, 請進一步篩選."},"oj-ojInputSearch":{required:{hint:"",messageSummary:"",messageDetail:""},noMatchesFound:"找不到相符項目",oneMatchesFound:"找到一個相符項目",moreMatchesFound:"找到 {num} 個相符項目"},"oj-ojTree":{stateLoading:"正在載入...",labelNewNode:"新建節點",labelMultiSelection:"多重選擇",labelEdit:"編輯",labelCreate:"建立",labelCut:"剪下",labelCopy:"複製",labelPaste:"貼上",labelPasteAfter:"貼在之後",labelPasteBefore:"貼在之前",labelRemove:"移除",labelRename:"重新命名",labelNoData:"沒有資料"},"oj-ojPagingControl":{labelAccPaging:"分頁",labelAccNavFirstPage:"第一頁",labelAccNavLastPage:"最後一頁",labelAccNavNextPage:"下一頁",labelAccNavPreviousPage:"上一頁",labelAccNavPage:"頁面",labelLoadMore:"顯示更多...",labelLoadMoreMaxRows:"已達 {maxRows} 個列數上限",labelNavInputPage:"頁次",labelNavInputPageMax:"/ {pageMax} 頁",msgItemRangeCurrent:"{pageFrom}-{pageTo}",msgItemRangeCurrentSingle:"{pageFrom}",msgItemRangeOf:" / ",msgItemRangeOfAtLeast:"/ 至少",msgItemRangeOfApprox:"/ 大約",msgItemRangeItems:"個項目",tipNavInputPage:"移至頁面",tipNavPageLink:"移至第 {pageNum} 頁",tipNavNextPage:"下一頁",tipNavPreviousPage:"上一頁",tipNavFirstPage:"第一頁",tipNavLastPage:"最後一頁",pageInvalid:{summary:"輸入的頁面值無效.",detail:"請輸入大於 0 的值."},maxPageLinksInvalid:{summary:"maxPageLinks 的值無效.",detail:"請輸入大於 4 的值."}},"oj-ojMasonryLayout":{labelCut:"剪下",labelPasteBefore:"貼在之前",labelPasteAfter:"貼在之後"},"oj-panel":{labelAccButtonExpand:"展開",labelAccButtonCollapse:"收合",labelAccButtonRemove:"移除"},"oj-ojChart":{labelDefaultGroupName:"群組 {0}",labelSeries:"序列",labelGroup:"群組",labelDate:"日期",labelValue:"值",labelTargetValue:"目標",labelX:"X",labelY:"Y",labelZ:"Z",labelPercentage:"百分比",labelLow:"低",labelHigh:"高",labelOpen:"開啟",labelClose:"關閉",labelVolume:"數量",labelQ1:"Q1",labelQ2:"Q2",labelQ3:"Q3",labelMin:"最小值",labelMax:"最大值",labelOther:"其他",tooltipPan:"移動瀏覽",tooltipSelect:"選框選取",tooltipZoom:"選框縮放",componentName:"圖表"},"oj-dvtBaseGauge":{componentName:"量表"},"oj-ojDiagram":{promotedLink:"{0} 個連結",promotedLinks:"{0} 個連結",promotedLinkAriaDesc:"間接",componentName:"圖表"},"oj-ojGantt":{componentName:"甘特圖",accessibleDurationDays:"{0} 天",accessibleDurationHours:"{0} 小時",accessibleTaskInfo:"開始時間為 {0}, 結束時間為 {1}, 持續時間為 {2}",accessibleMilestoneInfo:"時間為 {0}",accessibleRowInfo:"列 {0}",accessibleTaskTypeMilestone:"里程碑",accessibleTaskTypeSummary:"摘要",accessiblePredecessorInfo:"{0} 前置任務",accessibleSuccessorInfo:"{0} 後續任務",accessibleDependencyInfo:"相依性類型 {0}, 將 {1} 連線至 {2}",startStartDependencyAriaDesc:"開始至開始",startFinishDependencyAriaDesc:"開始至完成",finishStartDependencyAriaDesc:"完成至開始",finishFinishDependencyAriaDesc:"完成至完成",tooltipZoomIn:"放大",tooltipZoomOut:"縮小",labelRow:"列",labelStart:"開始",labelEnd:"結束",labelDate:"日期",labelBaselineStart:"基準開始",labelBaselineEnd:"基準結束",labelBaselineDate:"基準日期",labelLabel:"標籤",labelProgress:"進度",labelMoveBy:"移動依據",taskMoveInitiated:"移動工作已起始",taskMoveSelectionInfo:"已選取 {0} 個其他工作",taskMoveInitiatedInstruction:"使用方向鍵移動",taskMoveFinalized:"移動工作已完成",taskMoveCancelled:"移動工作已取消"},"oj-ojLegend":{componentName:"圖例"},"oj-ojNBox":{highlightedCount:"{0}/{1}",labelOther:"其他",labelGroup:"群組",labelSize:"大小",labelAdditionalData:"其他資料",componentName:"NBox"},"oj-ojPictoChart":{componentName:"圖片圖表"},"oj-ojSparkChart":{componentName:"圖表"},"oj-ojSunburst":{labelColor:"顏色",labelSize:"大小",tooltipExpand:"展開",tooltipCollapse:"收合",componentName:"環狀階層圖"},"oj-ojTagCloud":{componentName:"標籤雲"},"oj-ojThematicMap":{componentName:"主題地圖"},"oj-ojTimeAxis":{componentName:"時間軸"},"oj-ojTimeline":{componentName:"時間表",accessibleItemDesc:"描述為 {0}.",accessibleItemEnd:"結束時間為 {0}.",accessibleItemStart:"開始時間為 {0}.",accessibleItemTitle:"標題為 {0}.",labelSeries:"序列",tooltipZoomIn:"放大",tooltipZoomOut:"縮小"},"oj-ojTreemap":{labelColor:"顏色",labelSize:"大小",tooltipIsolate:"隔離",tooltipRestore:"回復",componentName:"矩形樹狀結構圖"},"oj-dvtBaseComponent":{labelScalingSuffixThousand:"K",labelScalingSuffixMillion:"M",labelScalingSuffixBillion:"B",labelScalingSuffixTrillion:"T",labelScalingSuffixQuadrillion:"Q",labelInvalidData:"無效的資料",labelNoData:"沒有資料可供顯示",labelClearSelection:"清除選取範圍",labelDataVisualization:"資料視覺化",stateSelected:"已選取",stateUnselected:"已取消選取",stateMaximized:"最大化",stateMinimized:"最小化",stateExpanded:"已展開",stateCollapsed:"已收縮",stateIsolated:"已隔離",stateHidden:"已隱藏",stateVisible:"可見",stateDrillable:"可展開",labelAndValue:"{0}: {1}",labelCountWithTotal:"{0} / {1}"},"oj-ojNavigationList":{defaultRootLabel:"導覽清單",hierMenuBtnLabel:"階層式功能表按鈕",selectedLabel:"已選取",previousIcon:"上一頁",msgFetchingData:"正在擷取資料...",msgNoData:"沒有可顯示的項目. ",overflowItemLabel:"更多",accessibleReorderTouchInstructionText:"點兩下並按住.  等聽到聲音後再拖曳進行重新安排.",accessibleReorderBeforeItem:"在 {item} 之前",accessibleReorderAfterItem:"在 {item} 之後",labelCut:"剪下",labelPasteBefore:"貼在之前",labelPasteAfter:"貼在之後",labelRemove:"移除",removeCueText:"可移除"},"oj-ojSlider":{noValue:"ojSlider 沒有值",maxMin:"最大值不能小於或等於最小值",valueRange:"值必須在最小值到最大值的範圍內",optionNum:"{option} 選項不是數字",invalidStep:"無效的步驟; 步驟必須 > 0"},"oj-ojDialog":{labelCloseIcon:"關閉"},"oj-ojPopup":{ariaLiveRegionInitialFocusFirstFocusable:"進入即現式視窗. 按下 F6 即可在即現式視窗與關聯的控制項之間瀏覽.",ariaLiveRegionInitialFocusNone:"即現式視窗已開啟. 按下 F6 即可在即現式視窗與關聯的控制項之間瀏覽.",ariaLiveRegionInitialFocusFirstFocusableTouch:"進入即現式視窗. 瀏覽至即現式視窗內最後一個連結可將該即現式視窗關閉.",ariaLiveRegionInitialFocusNoneTouch:"即現式視窗已開啟. 瀏覽至下一個連結可在該即現式視窗內建立焦點.",ariaFocusSkipLink:"點兩下即可瀏覽至開啟的即現式視窗.",ariaCloseSkipLink:"點兩下即可將開啟的即現式視窗關閉."},"oj-pullToRefresh":{ariaRefreshLink:"啟用重新整理內容連結",ariaRefreshingLink:"正在重新整理內容",ariaRefreshCompleteLink:"重新整理完成"},"oj-ojSwipeActions":{ariaShowStartActionsDescription:"顯示開始動作",ariaShowEndActionsDescription:"顯示結束動作",ariaHideActionsDescription:"隱藏動作"},"oj-ojIndexer":{indexerCharacters:"A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z",indexerOthers:"#",ariaDisabledLabel:"沒有相符的群組表頭",ariaOthersLabel:"數字",ariaInBetweenText:"介於 {first} 和 {second} 之間",ariaKeyboardInstructionText:"按 Enter 鍵以選取值.",ariaTouchInstructionText:"點兩下並按住以進入手勢模式, 您可以上下拖曳來調整值."},"oj-ojMenu":{labelCancel:"取消"},"oj-ojColorSpectrum":{labelHue:"色調",labelOpacity:"不透明度",labelSatLum:"彩度/明度",labelThumbDesc:"色譜四向滑動軸."},"oj-ojColorPalette":{labelNone:"無"},"oj-ojColorPicker":{labelSwatches:"調色板",labelCustomColors:"自訂顏色",labelPrevColor:"上一個顏色",labelDefColor:"預設顏色",labelDelete:"刪除",labelDeleteQ:"刪除?",labelAdd:"新增",labelAddColor:"新增顏色",labelMenuHex:"HEX",labelMenuRgba:"RGBa",labelMenuHsla:"HSLa",labelSliderHue:"色調",labelSliderSaturation:"彩度",labelSliderSat:"彩度",labelSliderLightness:"亮度",labelSliderLum:"光度",labelSliderAlpha:"Alpha",labelOpacity:"不透明度",labelSliderRed:"紅",labelSliderGreen:"綠",labelSliderBlue:"藍"},"oj-ojFilePicker":{dropzoneText:"將檔案拖放到此處或按一下以進行上傳"},"oj-ojProgressbar":{ariaIndeterminateProgressText:"進行中"},"oj-ojMessage":{labelCloseIcon:"關閉",categories:{error:"ERROR",warning:"WARNING",info:"INFORMATION",confirmation:"CONFIRMATION"}},"oj-ojMessages":{labelLandmark:"訊息",ariaLiveRegion:{navigationFromKeyboard:"進入訊息區域. 按 F6 即可回到先前聚焦的元素.",navigationToTouch:"訊息區域有新的訊息. 使用 VoiceOver 轉輪即可瀏覽至訊息標記.",navigationToKeyboard:"訊息區域有新的訊息. 按 F6 即可瀏覽至最新的訊息區域.",newMessage:"訊息類別 {category}. {summary}."}}});
