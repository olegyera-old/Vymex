import ResourcesMain from './app'
import WorkingFiles from "@/LTE/Singletons/Resources/views/WorkingFiles";
import StructuralUnits from "@/LTE/Singletons/Resources/views/StructuralUnits";
import MaterialResources from "@/LTE/Singletons/Resources/views/MaterialResources";
import NewFolder from "@/LTE/Singletons/Resources/views/NewFolder";
import EmptyFolder from "@/LTE/Singletons/Resources/views/EmptyFolder";

export default [
    {
        path: '/',
        component: ResourcesMain,
        name: 'resources',
    },
    {
        path: 'working-files',
        component: WorkingFiles,
        name: 'resources.working.files'
    },
    {
        path: 'structural-units',
        component: StructuralUnits,
        name: 'resources.structural.units',

    },
    {
        path: 'material-resources',
        component: MaterialResources,
        name: 'resources.material.resources'
    },
    {
        path: 'new-folder',
        component: NewFolder,
        name: 'resources.new.folder'
    },
    {
        path: 'empty-folder',
        component: EmptyFolder,
        name: 'resources.empty.folder'
    },
]