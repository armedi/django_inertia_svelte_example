from django.views import View
from inertia import render


class Index(View):
    def get(self, request):
        return render(request, 'index', props={
            'events': [
                'Milano',
                'Napoli',
            ],
            'page_name': 'Home'
        })
