//共同的信息
    //单位
    const unit = {
        'unit.entries':'个'
        
    }
    //弹框
    const popover = {
        // 弹窗新建/修改组件
        'popover.newComponent.title':'新建组件',
        'popover.newComponent.componentName':'组件名称',
        'popover.newComponent.gitHub':'Github项目',
        'popover.newComponent.gitLab':'Gitlab项目',
        'popover.newComponent.versions':'版本',
        'popover.newComponent.newProject':'新建项目',
        'popover.newComponent.codeBranch':'代码分支',

        // 弹窗新建/修改应用
        'popover.newApp.title':'新建应用',
        'popover.newApp.appName':'应用名称',
        'popover.newApp.appEngName':'应用英文名称',
        'popover.newApp.logo':'Logo',
        'popover.newApp.upload_pictures':'上传图片',
        'popover.newApp.upload_pictures.extra':'请上传 48 × 48 的图片',
        'popover.newApp.appEngName.extra':'需关闭应用下所有组件方可修改应用英文名称',
        'popover.newApp.appRemark':'应用备注',
        'popover.newApp.appRemark.placeholder':'请填写应用备注信息',
        'popover.newApp.appName.placeholder':'请填写应用名称',
        'popover.newApp.appEngName.placeholder':'请填写应用英文名称',

        //添加/编辑http访问策略
        'popover.access_strategy.title.add':'添加http访问策略',
        'popover.access_strategy.title.edit':'编辑Http访问策略',
        'popover.access_strategy.lable.routingRule':'路由规则',
        'popover.access_strategy.lable.domain_name':'域名',
        'popover.access_strategy.lable.domain_heander':'请求头',
        'popover.access_strategy.lable.the_weight':'权重',
        'popover.access_strategy.lable.certificate_id':'HTTPs证书',
        'popover.access_strategy.lable.function_select':'功能选择',
        'popover.access_strategy.lable.exist_certificate_select':'已有证书选择',
        'popover.access_strategy.lable.auto_ssl_config':'认证配置',
        'popover.access_strategy.lable.rule_extensions_http':'扩展功能',
        'popover.access_strategy.lable.port':'端口号',
        'popover.access_strategy.lable.component':'组件',
        'popover.access_strategy.modal.domain':'域名解析说明',
        'popover.access_strategy.lable.analysis':'请将域名解析到：',
        'popover.access_strategy.lable.more':'更多高级路由参数',
        'popover.access_strategy.lable.automatic_issued':'自动签发证书（由控制器自动完成证书签发和匹配）',
        'popover.access_strategy.lable.poll':'负载均衡算法：轮询',
        'popover.access_strategy.lable.conversation':'负载均衡算法：会话保持',
        'popover.access_strategy.lable.access_target':'访问目标',
        'popover.access_strategy.lable.li1':'1.HTTP访问控制策略是基于“域名"等组成路由规则，你需要在所绑定域名的域名服务商增加域名DNSA记录 到当前集群的应用网关出口IP地址之上域名访问即可生效。',
        'popover.access_strategy.lable.li2':'2.当前集群（{ currentRegion }) 出口IP地址是: { ip }',
        'popover.access_strategy.lable.li3':'3.如有疑问请联系平台运营管理员',

        //http访问策略参数配置
        'popover.config.title':'参数配置',
        'popover.config.lable.proxy_connect_timeout':'连接超时时间',
        'popover.config.lable.second':'秒',
        'popover.config.lable.proxy_send_timeout':'请求超时时间',
        'popover.config.lable.proxy_read_timeout':'响应超时时间',
        'popover.config.lable.proxy_body_size':'上传限制',
        'popover.config.lable.proxy_buffer_numbers':'缓冲区数量',
        'popover.config.lable.proxy_buffer_size':'缓冲区大小',
        'popover.config.lable.WebSocket':'WebSocket支持',
        'popover.config.lable.proxy_buffering':'开启ProxyBuffer',
        'popover.config.lable.set_headers':'自定义请求头',

        // 添加/编辑tcp/udp访问策略
        'popover.tcp.title.add':'添加tcp/udp访问策略',
        'popover.tcp.title.edit':'编辑tcp/udp访问策略',
        'popover.tcp.lable.rule_extensions':'负载均衡',
        'popover.tcp.lable.poll':'轮询',

        //tcp/udp访问策略参数配置
        'popover.tcp.config.title':'连接信息',
        'popover.tcp.config.table.attr_name':'变量名',
        'popover.tcp.config.table.attr_value':'变量值',
        'popover.tcp.config.table.name':'说明',


        // 弹框确定取消
        'popover.confirm':'确定',
        'popover.back':'上一步',
        'popover.cancel':'取消',

        // 位置：企业视图>总览>加入团队
        'popover.enterpriseOverview.joinTeam.title':'加入团队',
        'popover.enterpriseOverview.joinTeam.label':'团队名称',
        'popover.enterpriseOverview.joinTeam.message':'请选择团队',
        'popover.enterpriseOverview.joinTeam.placeholder':'请选择一个团队',
        'popover.enterpriseOverview.joinTeam.hint':'暂无团队可以添加，可以先创建团队。',

        // 位置：企业视图>总览>创建团队
        'popover.enterpriseOverview.setUpTeam.title':'创建团队',
        // label
        'popover.enterpriseOverview.setUpTeam.label.name':'团队名称',
        'popover.enterpriseOverview.setUpTeam.label.englishName':'团队英文名称',
        'popover.enterpriseOverview.setUpTeam.label.colony':'集群',
        'popover.enterpriseOverview.setUpTeam.label.creat_name':'点击可以创建团队。',
        'popover.enterpriseOverview.setUpTeam.label.creat_colony':'缺少集群、去创建',
        // placeholder
        'popover.enterpriseOverview.setUpTeam.placeholder.name':'请输入团队名称',
        'popover.enterpriseOverview.setUpTeam.placeholder.englishName':'团队的英文名称',
        'popover.enterpriseOverview.setUpTeam.placeholder.colony':'选择集群',
        'popover.enterpriseOverview.setUpTeam.placeholder.max':'最大长度10位',
        // conformDesc
        'popover.enterpriseOverview.setUpTeam.conformDesc.name':'请输入创建的团队名称，最大长度10位',
        'popover.enterpriseOverview.setUpTeam.conformDesc.englishName':'对应该团队在集群使用的命名空间',
        'popover.enterpriseOverview.setUpTeam.conformDesc.colony':'请选择使用的集群',
        // message
        'popover.enterpriseOverview.setUpTeam.message.name':'请输入团队名称',
        'popover.enterpriseOverview.setUpTeam.message.englishName':'请输入团队英文名称',
        'popover.enterpriseOverview.setUpTeam.message.colony':'请选择集群',

        //位置：企业视图>应用市场>添加应用商店
        'popover.applicationMarket.addMarket.title':'添加应用商店',
        'popover.applicationMarket.local':'本地组件库',
        'popover.applicationMarket.all':'全部',
        'popover.applicationMarket.company':'公司发布',
        'popover.applicationMarket.team':'团队发布',
    }
    const button = {
        'button.delete':'删除',
        'button.edit':'编辑',
        'button.search':'搜索',
        'button.install':'安装',
        'button.read_only':'只读',
        'button.push':'推送',
        'button.switch.open':'开',
        'button.switch.close':'关',
        'button.close':'关闭',
        'button.open':'开通',
        'button.submit':'提交',
        'button.give_up_release':'放弃发布',
        'button.affirm_publish':'确认发布',
        'button.retry':'重试',
        'button.forced_backup':'强制备份',
        'button.migration':'迁移',
        'button.recover':'恢复',
        'button.update':'更新',
        'button.cancel':'取消',
        'button.confirm':'确定',
        'button.save':'保存',
        'button.retest_check':'重新检测',
        'button.abandon_create':'放弃创建',
        'button.advanced_setup':'高级设置',
        'button.create':'创建',
        'button.confirm_create':'确认创建',
        'button.confirm_update':'确认修改',
        'button.components_build':'进入多组件构建',
        'button.service_build':'进入多服务构建',
        'button.build_start':'并构建启动',
        'button.be_authorized':'已授权',
        'button.umount':'取消挂载',
        'button.build_component':'构建组件',
        'button.add_depend':'添加依赖',
        'button.add_port':'添加端口',
        'button.add':'添加',
        'button.next_step':'下一步',
        'button.last_step':'上一步',
        'button.import':'确认导入',
        'button.apply':'申请',
        'button.previous':'上一步',
        'button.next':'下一步',
        'button.uninstall':'卸载',
        'button.copy':'复制',
        'button.operation':'操作',
        'button.Docking':'对接',
        'button.return':'返回',
        'button.configuration':'高级配置',
        'button.determine':'确认',

    }
    const status = {
        'status.component.running':'运行中',
        'status.component.health':'健康',
        'status.component.not_health':'不健康',
        'status.component.abnormally':'运行异常',
        'status.component.closed':'已关闭',
        'status.component.off_line':'下线',
        'status.app.backups.backuping':'备份中',
        'status.app.backups.error':'备份失败',
        'status.app.backups.success':'备份成功',
        'status.app.backups.yolkStroke':'备份导出中',
        'status.app.backups.imported':'备份已导入',
        'status.loading':'加载中...',
        'status.not_mount':'未挂载',
        'status.mounted':'已挂载',
    }
    const confirmModal = {
        //修改 删除
        'confirmModal.app.title.edit':'修改应用信息',
        'confirmModal.app.title.delete':'删除应用',
        'confirmModal.backup.title.delete':'删除备份',
        'confirmModal.delete.strategy.title':'删除策略',
        'confirmModal.delete.configuration.title':'删除配置组',
        'confirmModal.delete.resource.title':'属性删除',
        'confirmModal.abandon_create.create_check.title':'放弃创建',
        'confirmModal.compose.update.title':'修改compose内容',
        'confirmModal.umount.dalete.title':'取消挂载',
        'confirmModal.path.delete.title':'删除存储目录',
        'confirmModal.port.delete.title':'端口删除',
        'confirmModal.domain.delete.title':'域名解绑',
        'confirmModal.collect_view.delete.title':'删除收藏视图',
        'confirmModal.image_warehouse.delete.title':'删除镜像仓库授权信息',
        'confirmModal.role.delete.title':'删除角色',
        'confirmModal.component.delete.title':'删除组件',
        'confirmModal.token.delete.title':'删除令牌',
        'confirmModal.fast_entrance.delete.title':'删除快捷入口',
        'confirmModal.cluster.delete.title':'删除集群',
        'confirmModal.close.delete.title':'关闭',
        'confirmModal.admin.delete.title':'删除管理员',
        'confirmModal.forbidden.delete.title':'禁用',
        'confirmModal.app_versions.delete.title':'删除应用版本',
        'confirmModal.app_template.delete.title':'删除应用模版',
        'confirmModal.app_store.delete.title':'删除应用商店',
        'confirmModal.helm_store.delete.title':'删除Helm应用商店',
        'confirmModal.project_team_close.delete.title':'关闭项目/团队下所有组件',
        'confirmModal.project_team_quit.delete.title':'退出项目/团队',
        'confirmModal.revocation.delete.title':'撤销申请',
        'confirmModal.project_team_delete.delete.title':'删除项目/团队',
        'confirmModal.user.delete.title':'删除用户',
        'confirmModal.plugin.delete.title':'删除插件',
        'confirmModal.configuration_item.delete.title':'删除配置项',
        'confirmModal.drop_procedure.delete.title':'删除存储',
        'confirmModal.drop_versions.delete.title':'删除版本',
        'confirmModal.give_up_release.delete.title':'放弃发布',


        //组件提示
        'confirmModal.delete.strategy.subDesc':'此操作不可恢复',
        'confirmModal.delete.app_template.subDesc':'删除后其他人将无法安装此应用模型',
        'confirmModal.delete.data_backup.subDesc':'该操作将完整备份控制台的数据。',
        'confirmModal.component.restart.title':'确认要重启该组件吗？',
        'confirmModal.component.start.title':'确认要启动该组件吗？',
        'confirmModal.component.stop.title':'确认要关闭该组件吗？',
        'confirmModal.component.abandon.publish.title':'确定要放弃此次发布吗?',
        'confirmModal.app.delete.desc':'确定要此删除此应用吗？',
        'confirmModal.backup.delete.desc':'确定要删除此备份吗？',
        'confirmModal.delete.strategy.desc':'确定要删除此策略吗?',
        'confirmModal.delete.configuration.desc':'确定要删除此配置组吗？',
        'confirmModal.delete.resource.desc':'确定要删除此属性吗？',
        'confirmModal.delete.create_check.desc':'确定要放弃创建此组件吗？',
        'confirmModal.delete.create_check_app.desc':'确定要放弃创建此应用吗？',
        'confirmModal.delete.umount.desc':'确定要取消此挂载目录吗?',
        'confirmModal.delete.path.desc':'确定要删除此存储目录吗?',
        'confirmModal.delete.port.desc':'确定要删除此端口吗？',
        'confirmModal.delete.domain.desc':'确定要解绑此域名吗？',
        'confirmModal.delete.collect_view.desc':'确定要删除此视图吗？',
        'confirmModal.delete.image_warehouse.desc':'确定要删除镜像仓库授权信息吗？',
        'confirmModal.delete.role.desc':'确定要删除角色（ {deleteRole} ）吗？',
        'confirmModal.delete.component.desc':'确定要删除此组件吗？',
        'confirmModal.delete.token.desc':'确定要删除访问令牌?',
        'confirmModal.delete.fast_entrance.desc':'确定要删除此快捷入口吗？',
        'confirmModal.delete.cluster.desc':'确定要删除此集群吗？',
        'confirmModal.delete.monitor.desc':'确定要关闭监控？',
        'confirmModal.delete.component_ibrary_mirror.desc':'确定要关闭组件库镜像仓库？',
        'confirmModal.delete.automatic_issued.desc':'确定要关闭自动签发证书？',
        'confirmModal.delete.Oauth.desc':'确定要关闭Oauth2.0认证？',
        'confirmModal.delete.object_storage.desc':'确定要关闭对象存储？',
        'confirmModal.delete.admin.desc':'确定要删除此管理员吗？',
        'confirmModal.delete.forbidden.desc':'确定要禁用该Oauth服务吗？禁用后基于该服务构建的组件将不能进行构建',
        'confirmModal.delete.app_versions.desc':'确定要删除应用版本?',
        'confirmModal.delete.app_template.desc':'确定要删除此应用模型吗?',
        'confirmModal.delete.app_store.desc':'确定要删除此商店吗?',
        'confirmModal.delete.project_team_close.desc':'确定要关闭项目/团队下所有组件吗?',
        'confirmModal.delete.project_team_quit.desc':'确定要退出此项目/团队吗?',
        'confirmModal.delete.revocation.desc':'确定要撤销此申请吗?',
        'confirmModal.delete.project_team_delete.desc':'确定要删除此项目/团队和项目/团队下的所有资源吗？',
        'confirmModal.delete.user.desc':'确定要删除此用户吗？',
        'confirmModal.delete.plugin.desc':'确定要删除此插件吗？',
        'confirmModal.delete.configuration_item.desc':'确定要删除此配置项？',
        'confirmModal.delete.drop_procedure.desc':'确定要删除此存储？',
        'confirmModal.delete.drop_versions.desc':'确定要删除当前版本吗？',
        'confirmModal.delete.give_up_release.desc':'确定要放弃此次发布吗? ',
        'confirmModal.delete.data_backup.desc':'确定要进行数据备份吗? ',
        'confirmModal.delete.take_hand.desc':'删除后不可恢复，确定要删除吗？ ',

        //友情提示
        'confirmModal.friendly_reminder.title':'友情提示',
        'confirmModal.friendly_reminder.pages.desc':'{ codeObj }当前应用下的全部组件？',
        
        //应用复制
        'confirmModal.app.title.copy':'应用复制',
        'confirmModal.app.label.teamRegion':'复制到',
        'confirmModal.app.label.build':'构建源信息',
        'confirmModal.app.label.editVersions':'版本修改',
        'confirmModal.app.label.branch':'分支',
        'confirmModal.app.label.tag':'Tag',
        'confirmModal.app.label.not_change':'暂不支持变更版本',
        'confirmModal.app.label.third_party':'第三方组件',
        'confirmModal.app.label.mirror_image':'镜像:',
        'confirmModal.app.label.sound_code':'源码:',
        'confirmModal.app.label.component_library':'组件库:',
        'confirmModal.app.label.local':'本地文件:',
        'confirmModal.app.label.editVersions':'版本修改',

        //应用治理模式切换
        'confirmModal.app.govern.title':'应用治理模式切换',
        'confirmModal.app.govern.alert.msg':'应用治理模式主要指组件间通信模式的治理，目前支持内置ServiceMesh模式,Istio治理模式和Kubernetes原生Service模式',
        'confirmModal.app.govern.label.name_port':'组件名称/端口',
        'confirmModal.app.govern.label.alias':'别名',
        'confirmModal.app.govern.label.DNS':'内部域名',
        'confirmModal.app.govern.label.change':'治理模式选择',
        'confirmModal.app.govern.label.mode':'模式说明',
        'confirmModal.app.govern.label.service':'该模式组件间使用Kubernetes service名称域名进行通信，用户需要配置每个组件端口注册的service名称，治理能力有限.',
        'confirmModal.app.govern.label.serviceMesh':'内置ServiceMesh模式需要用户显示的配置组件间的依赖关系，平台会在下游组件中自动注入sidecar容器组成ServiceMesh微服务架构，业务间通信地址统一为localhost模式',
        'confirmModal.app.govern.label.istio':'该模式组件间使用Kubernetes service名称域名进行通信，用户需要配置每个组件端口注册的service名称，且安装Istio  control plane ，通过Istio进行治理。',

        //修改负责人
        'confirmModal.app.title.principal':'修改负责人',
        'confirmModal.app.lable.principal':'负责人',


        //删除/编辑/添加成员
        'confirmModal.add.member':'添加成员',
        'confirmModal.delete.member':'删除成员',
        'confirmModal.delete.member.desc':'确定要删除此成员吗？',
        'confirmModal.edit.member':'编辑成员',
        'confirmModal.lable.member.user_name':'用户名',
        'confirmModal.lable.member.user_ids':'选择用户',
        'confirmModal.lable.member.role_ids':'选择角色',

        //移交团队
        'confirmModal.MoveTeam.title':'移交团队',
        'confirmModal.MoveTeam.subDesc':'移交后您将失去所有权',
        'confirmModal.MoveTeam.desc':'确定要把团队移交给 { nick_name } 吗？',

        //开通集群
        'confirmModal.openRegion.title':'开通集群',
        'confirmModal.openRegion.alert':'暂无其他集群，请到集群管理面板中添加更多集群',
        'confirmModal.openRegion.table.region_alias':'名称',
        'confirmModal.openRegion.table.region_name':'集群',
        'confirmModal.openRegion.table.desc':'简介',
        'confirmModal.openRegion.card.title':'当前团队没有集群，请先开通"',

        //添加/修改镜像仓库授权信息
        'confirmModal.add.image.title':'添加镜像仓库授权信息',
        'confirmModal.edit.image.title':'修改镜像仓库授权信息',
        'confirmModal.image.lable.domain':'镜像仓库地址',
        'confirmModal.image.lable.username':'用户名',
        'confirmModal.image.lable.password':'密码',

        //提示
        'confirmModal.component.hint':'提示',
        'confirmModal.component.request_Error':'请求错误',

        //检测
        'confirmModal.component.check.title.loading':'组件构建源检测中...',
        'confirmModal.component.check.title.success':'组件构建源检测通过',
        'confirmModal.component.check.title.error':'组件构建源检测未通过',
        'confirmModal.component.check.title.error.component_check':'组件检测未通过',
        'confirmModal.component.check.title.success.component_check':'组件检测通过',
        'confirmModal.component_build.check.model.build':'组件构建源检测出多模块构建',
        'confirmModal.component.check.title.error.description':'请核对并修改以下信息后，再重新检测。',
        'confirmModal.third_party.check.title.success':'第三方组件检测通过',
        'confirmModal.component.check.appShare.desc':'此过程可能比较耗时，请耐心等待',
        'confirmModal.check.appShare.title.loading':'应用同步中',
        'confirmModal.check.appShare.title.success':'应用同步成功',
        'confirmModal.check.appShare.title.error':'请查看以下日志确认问题后重试',
        
        // 删除组件
        'confirmModal.assembly.delete.title':'删除组件',
        'confirmModal.assembly.delete.desc':'确定要删除此组件吗？',
        'confirmModal.assembly.delete.subDesc':'此操作不可恢复',

        // 删除配置
        'confirmModal.deldete.configure.title':'删除配置',
        'confirmModal.deldete.configure.desc':'确定要删除配置?',

        // 删除监控视图
        'confirmModal.deldete.monitor.title':'删除监控视图',
        'confirmModal.deldete.monitor.desc':'确定要删除此视图吗？',
        'confirmModal.deldete.monitor.subDesc':'此操作不可恢复',

        // 删除指标
        'confirmModal.deldete.index.title':'删除指标',
        'confirmModal.deldete.index.desc':'是否删除该指标',

        // 删除配置文件
        'confirmModal.deldete.configurationFile.title':'删除配置文件',
        'confirmModal.deldete.configurationFile.desc':'确定要删除此配置文件吗?',

        // 取消挂载共享配置文件
        'confirmModal.deldete.unmount.title':'取消挂载共享配置文件',
        'confirmModal.deldete.unmount.desc':'确定要取消此挂载共享配置文件目录吗?',

        // 转移环境变量
        'confirmModal.deldete.transfer.title':'转移环境变量',
        'confirmModal.deldete.transfer.desc':'确定要将此环境变量转换为组件连接信息变量吗?',
        'confirmModal.deldete.transfer.title_information':'转移连接信息变量',
        'confirmModal.deldete.transfer.desc_information':'确定要将此连接信息变量转换为环境变量吗?',
        'confirmModal.deldete.transfer.subDesc':'此操作不可恢复',
        'confirmModal.deldete.transfer.determine':'确定要转移此变量吗？',


    
        // 删除环境变量
        'confirmModal.deldete.env.title':'删除变量',
        'confirmModal.deldete.env.desc':'确定要删除此变量吗？',
        'confirmModal.deldete.env.subDesc':'此操作不可恢复',

        // 取消挂载
        'confirmModal.deldete.Unmount.title':'取消挂载',
        'confirmModal.deldete.Unmount.desc':'确定要取消此挂载目录吗?',

        // 删除目录
        'confirmModal.deldete.storage.title':'删除存储目录',
        'confirmModal.deldete.storage.desc':'确定要删除此存储目录吗?',

        // 端口删除
        'confirmModal.deldete.port.title':'端口删除',
        'confirmModal.deldete.port.desc':'确定要删除此端口吗？',
        'confirmModal.deldete.port.subDesc':'此操作不可恢复?',

        // 域名解绑
        'confirmModal.deldete.unbound.title':'域名解绑',
        'confirmModal.deldete.unbound.desc':'确定要解绑此域名吗？',

        // 卸载插件
        'confirmModal.deldete.plugin.title':'卸载插件',
        'confirmModal.deldete.plugin.desc':'确定要卸载此插件吗？',

        //删除此Maven配置
        'confirmModal.deldete.Maven.title':'删除此Maven配置',
        'confirmModal.deldete.Maven.desc':'该配置为集群下的默认Maven配置，若删除，整个集群使用该配置的组件均会受到影响，是否确认删除？',
        'confirmModal.deldete.Maven.desc_delete':'确定要删除此Maven配置吗?',
        'confirmModal.deldete.Maven.subDesc':'此操作不可恢复',

        // 属性删除
        'confirmModal.deldete.attribute.title':'属性删除',
        'confirmModal.deldete.attribute.desc':'确定要删除此属性吗？',
        'confirmModal.deldete.attribute.subDesc':'此操作不可恢复',


    }
    const notification = {
        // 成功
        'notification.success.delete':'删除成功',
        'notification.success.setUp':'创建成功',
        'notification.success.edit':'编辑成功',
        'notification.success.add':'添加成功',
        'notification.success.open':'开启成功',
        'notification.success.close':'关闭成功',
        'notification.success.save':'保存成功',
        'notification.success.updates':'更新成功',
        'notification.success.migration':'迁移成功',
        'notification.success.change':'修改成功',
        'notification.success.upload':'上传成功',
        'notification.success.update':'上传成功',
        'notification.success.deployment':'操作成功，部署中',
        'notification.success.upgrade':'操作成功，升级中',
        'notification.success.rollback':'操作成功，回滚中',
        'notification.success.takeEffect':'重启应用后生效',
        'notification.success.succeeded':'操作成功',
        'notification.success.operationRestart':'操作成功，重启中',
        'notification.success.operationStart':'操作成功，启动中',
        'notification.success.operationClose':'操作成功，关闭中',
        'notification.success.operationUpdata':'操作成功，更新中',
        'notification.success.operationImplement':'操作成功，执行中',
        'notification.success.modified':'修改成功',
        'notification.success.setupAssembly':'设置成功，更新组件后生效',
        'notification.success.closeAssembly':'关闭成功，更新组件后生效',
        'notification.success.Failed':'失败！',
        'notification.success.transfer':'转移成功',
        'notification.success.copy':'复制成功',
        'notification.success.enable':'启用成功',
        'notification.success.deactivate':'停用成功',
        'notification.success.operationToUpdate':'操作成功、需要更新才能生效',
        'notification.success.openToUpdate':'开通成功,需要更新才能生效',
        'notification.success.uninstallToUpdate':'卸载成功，需要更新才能生效',
        'notification.success.secondary':'二级域名添加成功',
        'notification.success.edit_port':'端口修改成功',
        'notification.success.cannotModify':'端口不能修改',
        'notification.success.upload_file':'上传文件成功',
        'notification.success.delete_file':'删除文件成功',
        'notification.success.edit_deploy':'修改成功，下次构建部署时生效',
        'notification.success.to_update':'更新成功',
        'notification.success.assembly_start':'启用成功,请更新组件后生效',
        'notification.success.assembly_disable':'禁用成功,请更新组件后生效',
        'notification.success.assembly_edit':'编辑成功,请更新组件后生效',
        'notification.success.assembly_add':'添加成功,需重启或更新才能生效',
        'notification.success.data_save':'数据保存成功',
        'notification.success.attribute_delete':'属性删除成功',
        'notification.success.attribute_edit':'属性修改成功,重启后生效',
        'notification.success.attribute_add':'属性添加成功,重启后生效',
        //-------------------------------------
        'notification.success.opened_successfully':'开通成功',
        'notification.success.cancel_successfully':'取消成功',
        'notification.success.being_imported':'操作成功，正在导入',
        'notification.success.starting_imported':'开始导入应用',
        'notification.success.imports_closure':'导入完成',
        'notification.success.reimport':'开始重新导入',
        'notification.success.binding_success':'绑定成功',
        'notification.success.cluster_uninstalled':'集群正在卸载中，稍后请刷新列表',
        'notification.success.setting_successfully':'设置成功',
        'notification.success.upgrade_successfully':'升级成功',
        'notification.success.relation_successfully':'获取成功,稍后将与您联系',
        'notification.success.pending':'等待中',
        'notification.success.importing':'导入中',
        'notification.success.successed':'成功',
        'notification.success.starting_success':'启动成功',
        'notification.success.login_again':'修改成功，请重新登录',
        'notification.success.new_success':'新建成功',
        'notification.success.install_success':'安装成功',
        'notification.success.success_create_components':'成功创建多组件',
        'notification.success.wait_review':'申请成功，请等待审核',
        'notification.success.restore_success':'恢复成功，请退出后重新登录',
        'notification.success.Oauth2':'开启Oauth2.0认证',
        'notification.success.operate_successfully':'操作成功，开始导出，请稍等！',
        'notification.success.operate_successfully_close':'操作成功，组件正在关闭中',
        'notification.success.project_team_delete':'项目/团队删除成功',
        'notification.success.withdraw_claim':'撤销申请成功',
        'notification.success.Depend_add':'依赖添加成功。',
        'notification.success.Depend_add_need_update':'依赖添加成功，需要更新才能生效。',
        'notification.success.reboot_success':'重启成功',
        'notification.success.build_success':'构建成功',
        'notification.success.add_success':'新增成功',
        'notification.success.wait_patiently':'更新中、请耐心等待',

        // 失败
        'notification.error.delete':'删除失败',
        'notification.error.setUp':'创建失败',
        'notification.error.edit':'编辑失败',
        'notification.error.add':'添加失败',
        'notification.error.update':'上传失败',
        'notification.error.migration':'迁移失败，请重新迁移',
        'notification.error.change':'修改失败',
        'notification.error.close':'关闭失败',
        'notification.error.upload':'请上传以.txt, .json, .yaml, .yaml, .xml结尾的文件',
        'notification.error.notDetected':'未检测到上传文件',
        'notification.error.failed_import_app':'部分应用导入失败，你可以重试或取消导入',
        'notification.error.failed_import':'应用导入失败',
        'notification.error.none_deployed':'当前组件属于未部署状态',
        'notification.error.setting_failed':'设置失败咯，请稍后重试',
        'notification.error.json_format_failed':'格式错误、请输入正确的JSON格式',


        // 警告
        'notification.warn.team':'请先加入团队！',
        'notification.warn.app':'请先创建应用！',
        'notification.warn.cannot_select':'不能选择当前所在应用',
        'notification.warn.error':'请求错误',
        'notification.warn.executing':'正在执行操作，请稍后',
        'notification.warn.notYet':'暂无实例详情',
        'notification.warn.choice.catalogue':'请选择要挂载共享配置文件目录',
        'notification.warn.inspect.fillIn':'请检查本地配置文件目录是否填写',
        'notification.warn.relyOn':'请选择要依赖的应用',
        'notification.warn.state':'有状态组件存储配置发生变化后',
        'notification.warn.restart':'需要重启组件才能生效',
        'notification.warn.mountPath':'挂载路径不可使用',
        'notification.warn.catalogue':'请选择要挂载的目录',
        'notification.warn.fillIn':'请检查本地存储目录是否填写',
        'notification.warn.update_language':'更新语言失败',
        'notification.warn.update_xml':'请上传以.xml结尾的文件',
        'notification.warn.assembly_close':'请先关闭组件后再更改状态',
        'notification.warn.label':'请选择要添加的标签',
        'notification.warn.upload_file':'您还没有上传文件',
        'notification.warn.choose_one':'请至少选择一个',
        'notification.warn.not_select_app':'不能选择当前所在应用',
        'notification.warn.yaml_file':'请上传以.yaml、.yml结尾的 Region Config 文件',
        'notification.warn.read':'请阅读并同意注意事项',
        'notification.warn.add_max':'最多添加100个',
        'notification.warn.warehouse_exist':'仓库名称已存在',
        'notification.warn.app_copy_max20':'应用复制最多20个组件',
        'notification.warn.purchase':'当前集群不可购买',
        'notification.warn.need_build_module':'请选择需要构建的模块',
        'notification.warn.create_team':'请先创建团队！',
        'notification.warn.Order_longer_exist':'订单不存在',
        'notification.warn.malfunction':'操作遇到故障，请稍后重试',
        'notification.warn.port_null':'暂无端口可用',
        'notification.warn.parameter_error':'参数异常',

        //提示
        'notification.hint.component.change':'切换成功、更新组件后生效',
        'notification.hint.component.putBatchMove':'批量移动中',
        'notification.hint.component.putBatchStop':'批量关闭中',
        'notification.hint.component.putBatchStart':'批量启动中',
        'notification.hint.component.putBatchRestart':'批量重启中',
        'notification.hint.component.putBatchUpgrade':'批量更新中',
        'notification.hint.component.putBatchDeploy':'批量构建中',
        'notification.hint.component.putReStart':'操作成功，重启中',
        'notification.hint.component.putStart':'操作成功，启动中',
        'notification.hint.component.putStop':'操作成功，关闭中',

        //其他
        'notification.hint.migration.team':'请选择迁移团队',
        'notification.hint.migration.cluster':'请选择迁移集群',
        'notification.hint.migration.loading.desc':'迁移中，请稍后(请勿关闭弹窗)',
        'notification.hint.migration.warning.alert':'本地备份不能进行跨集群迁移',
        'notification.hint.recover.loading':'恢复中，请稍后(请勿关闭弹窗)',
        'notification.hint.recover.success.delete':'恢复成功，是否删除当前应用？',
        'notification.hint.recover.error.alert':'恢复失败，请重新恢复',
        'notification.hint.recover.alert':'您是否要恢复备份到当前集群?',
        'notification.hint.recover.warning.continue':'您当前应用未完全恢复，是否继续？',
        'notification.hint.confiuration.update.title':'需更新组件立即生效',
        'notification.hint.confiuration.update.content':'是否立即更新组件',
        'notification.hint.confiuration.editContent':'请编辑内容',
        'notification.hint.resource.msg':'yaml文件内容不能为空',
        'notification.hint.needUpdate.msg':'需要更新才能生效',
        'notification.hint.select_depend.msg':'请选择要依赖的应用',
        'notification.hint.toUpdata':'需要更新才能生效',
        'notification.hint.selectPort':'您还没有选择端口，请先选择端口！',
        'notification.hint.need_updata':'需要更新后才能生效',

    }
    const placeholder = {
        'placeholder.appName':'请选择要所属应用',
        'placeholder.service_cname':'请为创建的组件起个名字吧',
        'placeholder.k8s_component_name':'请输入组件的英文名称',
        'placeholder.appEngName':'请输入应用的英文名称',
        'placeholder.git_url':'请输入仓库地址',
        'placeholder.code_version':'请输入代码版本',
        'placeholder.notGit_url':'仓库地址不合法',
        'placeholder.subdirectories':'请输入子目录路径',
        'placeholder.password_1':'请输入仓库密码',
        'placeholder.username_1':'请输入仓库用户名',
        'placeholder.select':'请选择',
        'placeholder.selectPort':'请选择端口号',
        'placeholder.selectComponent':'请选择组件',
        'placeholder.max24':'最大长度24位',
        'placeholder.docker_cmdMsg':'请输入镜像名称',
        'placeholder.docker_cmd':'请输入镜像名称, 如 nginx : 1.11',
        'placeholder.dockerRunMsg':'请输入DockerRun命令',
        'placeholder.dockerRun':'例如： docker run -d -p 8080:8080 -e PWD=1qa2ws --name=tomcat_demo tomcat',
        'placeholder.yaml_content':'请输入DockerCompose配置内容',
        'placeholder.user_name':'请输入仓库用户名',
        'placeholder.password':'请输入仓库密码',
        'placeholder.group_name':'请输入应用名称',
        'placeholder.component_cname':'请输入组件名称',
        'placeholder.endpoints':'请选择endpoints类型!',
        'placeholder.componentAddress':'请输入组件地址',
        'placeholder.nameSpaceMsg':'请输入Namesapce',
        'placeholder.nameSpace':'留空则默认为当前团队所在Namesapce',
        'placeholder.serviceName':'请输入服务名',
        'placeholder.attrName':'请输入正确的地址',
        'placeholder.notAttrName':'组件地址不能相同',
        'placeholder.nameSpaceReg':'只支持小写字母、数字或“-”，并且必须以字母开始、以数字或字母结尾',
        'placeholder.max32':'不能大于32个字符',
        'placeholder.nonsupport':'不支持{ nonsupport }',
        'placeholder.nonsupport.regAddress':'地址',
        'placeholder.roleName':'请输入角色名称',
        'placeholder.permissions':'权限分配!',
        'placeholder.nonsupport.regLoopBack':'环回接口地址',
        'placeholder.max255':'最大长度255位',
        'placeholder.preview_image':'预览图片',
        'placeholder.component_not_name':'要创建的组件还没有名字',
        'placeholder.not_available':'暂无项目，请先创建',
        'placeholder.no_spaces':'禁止输入空格',
        'placeholder.addDomain':'请添加域名',
        'placeholder.addDomain.pattern':'请填写正确的域名格式，支持泛域名',
        'placeholder.path.absolute':'请输入绝对路径',
        'placeholder.max1024':'最大长度1024',
        'placeholder.certificate.bound':'请绑定证书',
        'placeholder.certificate.remove':'移除证书绑定',
        'placeholder.select.sign_issue':'请选择签发证书认证配置',
        'placeholder.select.rule_extensions_round':'请选择负载均衡类型',
        'placeholder.int':'请输入整数',
        'placeholder.4k':'输入值过小，或不是合法数字，推荐至少设置4K',
        'placeholder.max65535':'最大输入值65535',
        'placeholder.min0':'最小输入值0',
        'placeholder.proxy_connect_timeout':'请输入超时时间',
        'placeholder.proxy_send_timeout':'请输入请求超时时间',
        'placeholder.proxy_read_timeout':'请输入响应超时时间',
        'placeholder.proxy_body_size':'请输入',
        'placeholder.proxy_buffer_size':'请输入缓冲区大小',
        'placeholder.app':'请选择应用',
        'placeholder.ipOrPort':'请输入完整的ip和端口',
        'placeholder.internal_port':'该端口属于内部端口、请重新输入',
        'placeholder.limit':'端口号限制在 1-65534',
        'placeholder.plugin.plugin_alias':'要创建的插件还没有名字',
        'placeholder.plugin.plugin_aliasMsg':'请为创建的插件起个名字吧',
        'placeholder.plugin.build_source':'请选择插件安装来源',
        'placeholder.plugin.category':'请选择类别',
        'placeholder.plugin.image':'请输入镜像地址（名称:tag）如nginx:1.11',
        'placeholder.plugin.code_repo':'请输入源码Git地址（必须包含Dockerfile文件）',
        'placeholder.plugin.labelName':'最小内存',
        'placeholder.plugin.message':'请选择最小内存',
        'placeholder.plugin.min_cpu':'请输入CPU',
        'placeholder.plugin.min_cpuMsg':'只允许输入整数',
        'placeholder.plugin.build_cmd':'请输入插件的启动命令',
        'placeholder.plugin.update_info':'请输入更新说明',
        'placeholder.plugin.desc':'请输入一句话说明',
        'placeholder.userName':'请输入用户名称',
        'placeholder.user_ids':'请选择要添加的用户',
        'placeholder.role_ids':'请选择角色',
        'placeholder.open_colony':'请选择要开通的集群',
        'placeholder.not_Chinese':'不能输入汉字',
        'placeholder.reg_Chinese':'书写格式错误',
        'placeholder.regEmpty':'缺陷编号不能为空',
        'placeholder.templateFile':'请选择Values文件',
        'placeholder.helm.version':'请选择版本',
        'placeholder.helm.overrides':'请填写Values配置',
        'placeholder.copy.team_region':'团队/集群',
        'placeholder.copy.not_null':'不能为空',
        'placeholder.k8s_service_name.msg':'必须由小写字母、数字和-组成，并且必须以小写字母开始,数字和小写字母结束',
        'placeholder.max63':'最大长度63位',
        'placeholder.govern.change':'未安装控制平面，无法切换',
        'placeholder.govern.is_valid':'格式错误!',
        'placeholder.app_not_name':'要创建的应用还没有名字',
        'placeholder.appShare.formatError':'输入格式不正确',
        'placeholder.appShare.min_node':'请输入最小节点',
        'placeholder.appShare.max_node':'请输入最大节点',
        'placeholder.appShare.step_node':'请输入节点步长',
        'placeholder.appShare.init_memory':'请输入初始内存',
        'placeholder.appShare.container_cpu':'请输入CPU',
        'placeholder.appShare.versions_notNull':'版本不能为空, 请选择或添加版本',
        'placeholder.appShare.layout_grid_mode':'只允许输入数字、版本格式:1.0或1.0.0',
        'placeholder.appShare.leastOne':'请至少发布一个组件',
        'placeholder.appShare.appTemplate':'应用模版选择是必须的',
        'placeholder.appShare.selectAppTemplate':'选择发布的应用模版',
        'placeholder.appShare.version':'版本号默认为选择模版的上次发布版本',
        'placeholder.appShare.max64':'最大长度64位',
        'placeholder.appShare.version_alias':'设置版本别名，比如高级版',
        'placeholder.appShare.describe':'请输入版本说明',
        'placeholder.appShare.retain':'请至少保留一个组件',
        'placeholder.appShare.appPublish.name':'请输入名称',
        'placeholder.appShare.scopePublish':'请选择发布范围',
        'placeholder.appShare.org_id':'请选择行业',
        'placeholder.appShare.addTag_ids':'请添加标签',
        'placeholder.appShare.kindTag':'请选择分类标签',
        'placeholder.appShare.describe':'请输入简介',
        'placeholder.appShare.picLogo':'请上传图标',
        'placeholder.appShare.select.shop':'请选择发布的商店',
        'placeholder.backup.note':'请写入备份说明',
        'placeholder.backup.select.team':'请选择团队',
        'placeholder.contiguration.msg.config_group_name':'请填写配置组名称',
        'placeholder.contiguration.msg.min2':'最小长度2位',
        'placeholder.contiguration.msg.config_items':'请填写配置项',
        'placeholder.contiguration.msg.service_ids':'请选择生效组件',
        'placeholder.contiguration.msg.rule':'必须由字母、数字和 - . _ 组成，不支持数字开头',
        'placeholder.contiguration.msg.not_null':'配置项key值不能为空',
        'placeholder.contiguration.msg.key':'请输入key值',
        'placeholder.contiguration.msg.value':'请输入value值',
        'placeholder.image.service_cname':'请为创建的应用起个名字吧',
        'placeholder.git_url.error':'仓库地址不正确',
        'placeholder.input_content':'请输入内容',
        'placeholder.setting.extend_method':'请选择组件类型',
        'placeholder.setting.schedule':'请选择运行规则',
        'placeholder.setting.min_memory':'请选择内存',
        'placeholder.component_search':'请输入组件名称进行搜索',
        'placeholder.oauth.oauth_type':'请选择oauth_type类型',
        'placeholder.oauth.home_url':'请输入服务地址',
        'placeholder.oauth.not_url':'输入数据不是合法的URL',
        'placeholder.oauth.client_id':'请输入client_id',
        'placeholder.oauth.client_secret':'请输入client_secret',
        'placeholder.oauth.redirect_domain':'请输入正确的回调地址',
        'placeholder.oauth.redirect_domains':'请输入回调地址',
        'placeholder.oauth.is_auto_login':'设置是否开启自动登录选项',
        'placeholder.oauth.password':'请输入密码',
        'placeholder.oauth.namespace':'请输入命名空间',
        'placeholder.oauth.endpoint':'请输入endpoint',
        'placeholder.oauth.bucket_name':'请输入bucket_name',
        'placeholder.oauth.access_key':'请提供具有足够权限的Access Key',
        'placeholder.oauth.secret_key':'请提供具有足够权限的Secret Key',
        'placeholder.oauth.home_url':'请输入监控地址',
        'placeholder.oauth.cluster_monitor_suffix':'请输入集群监控',
        'placeholder.oauth.node_monitor_suffix':'请输入节点监控',
        'placeholder.oauth.component_monitor_suffix':'请输入组件监控',
        'placeholder.oauth.slo_monitor_suffix':'请输入服务监控',
        'placeholder.oauth.importBackups':'请填写当前登录账号密码',
        'placeholder.oauth.title':'请输入标题',
        'placeholder.oauth.enterprise_alias':'请输入企业名称',
        'placeholder.oauth.doc_url':'请输入文档地址',
        'placeholder.oauth.logo':'请上传236 ✖️ 35的图片',
        'placeholder.oauth.favicon':'请上传33 ✖️ 33的图片',
        'placeholder.createUser.user_name':'请填写用户名!',
        'placeholder.createUser.min3':'最小长度3位',
        'placeholder.createUser.real_nameMsg':'只支持字母、数字、_和-组合',
        'placeholder.createUser.real_name':'请填写姓名!',
        'placeholder.createUser.email':'请填写邮箱！',
        'placeholder.createUser.password':'请填写密码',
        'placeholder.createUser.emailMsg':'邮箱格式不正确！',
        'placeholder.createUser.phoneMsg':'请输入正确的手机号',
        'placeholder.createUser.phone':'请填写手机号',
        'placeholder.createUser.new_password':'留空则不修改密码',
        'placeholder.createUser.selectTeam':'请选择团队！',
        'placeholder.createUser.tenant_name':'请输入团队名称进行查询',
        'placeholder.createUser.role_ids':'请选择用户角色',
        'placeholder.searchUser.user':'搜索用户',
        'placeholder.cluster.edit.region_name':'集群ID不可修改',
        'placeholder.cluster.edit.region_name.content':'请填写集群ID',
        'placeholder.cluster.edit.region_alias':'请填写集群名称',
        'placeholder.cluster.edit.url':'API通信地址是必填项',
        'placeholder.cluster.edit.urlhttp':'只支持https或http协议头',
        'placeholder.cluster.edit.url.content':'请输入API通信地址',
        'placeholder.cluster.edit.wsurl':'WebSocket通信地址是必填项',
        'placeholder.cluster.edit.wss':'只支持ws或wss协议头',
        'placeholder.cluster.edit.wsurl.content':'请输入WebSocket通信地址',
        'placeholder.cluster.edit.httpdomain':'HTTP应用默认域名后缀是必填项',
        'placeholder.cluster.edit.httpdomain.content':'HTTP应用默认域名后缀是必填项',
        'placeholder.cluster.edit.tcpdomain':'TCP应用默认访问IP是必填项',
        'placeholder.cluster.edit.tcpdomain.content':'请输入TCP应用默认访问IP',
        'placeholder.cluster.edit.ssl_ca_cert':'API-CA证书',
        'placeholder.cluster.edit.ssl_ca_cert.content':'API-CA证书内容',
        'placeholder.cluster.edit.cert_file':'API-Client证书必填',
        'placeholder.cluster.edit.cert_file.content':'API-Client证书内容',
        'placeholder.cluster.edit.key_file':'API-Client证书密钥必填',
        'placeholder.cluster.edit.key_file.content':'API-Client证书密钥内容',
        'placeholder.cluster.edit.desc':'集群备注信息',

    }
    const tooltip = {
        'tooltip.visit':'跳转到组件对外访问端口对应的域名地址',
    }

export default Object.assign({}, unit, popover, button, notification, placeholder, tooltip, confirmModal, status);
